import React from 'react'
import Header from './Header'
import STORE from '../store'
import ACTIONS from '../actions'
import {User, QuestionModel, QuestionCollection} from '../models/models'
import Footer from './Footer'

const MyQuestionView = React.createClass ({

    getInitialState: function() {
        return STORE._getData()
    },

    componentWillMount: function() {

        var queryForQuestions = {
            authorId: User.getCurrentUser()._id
        }
        // console.log(typeof queryForQuestions)
        ACTIONS._fetchQuestions(queryForQuestions)
        STORE.on('updateContent', () => {
            this.setState(STORE._getData())
        })

    },

    componentWillUnmount: function() {
        STORE.off('updateContent')
    },

    render: function() {
        // console.log(this.props)
        return (
            <div className = 'dashboard'>
                <Header />
                <Question coll = {this.state.collection}/>
                <Footer />
            </div>
        )
    }
})

const Question = React.createClass({

    _createQuestion: function(model) {
            return (
                <div>
                    <Dashboard model = {model}/>
                </div>
        )
    },

    render: function() {
        return(
            <div>
                {this.props.coll.map(this._createQuestion)}
            </div>)
    }
})

const Dashboard = React.createClass ({

    _getAnsweredStatus: function() {
        if(this.props.model.get('isAnswered') === null) {
            return 'NO'
        }
        else {
            return 'YES'
        }
    },

    _getPostedOn: function() {
        var dateString = new Date(this.props.model.get('createdAt'))

        return dateString.toLocaleString()
    },

    _handleDelete: function() {
        ACTIONS._deleteQuestion(this.props.model.get('_id'))
    },

    render: function() {
        // console.log(this.props.model)
        return (
            <div className = 'dashboardBody'>
                <div className = 'left'>
                    <a href = {`#question/${this.props.model.get('_id')}`}>{this.props.model.get('question')}</a>
                    <p>{this.props.model.get('content')}</p>
                </div>
                <div className = 'right'>
                    <p>posted by: {this.props.model.get('username')}</p>
                    <p>posted on: {this._getPostedOn()}</p>
                    <p>tags: {this.props.model.get('tags')}</p>
                    <p>answered: {this._getAnsweredStatus()}</p>
                    <p> # of answers: {this.props.model.get('numOfAnswers')}</p>
                    <button onClick = {this._handleDelete}>X</button>
                </div>
                <hr />
            </div>
        )
    }
})

export default MyQuestionView