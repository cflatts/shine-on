import React from 'react'
import Header from './Header'
import STORE from '../store'
import ACTIONS from '../actions'
import {User, QuestionModel, QuestionCollection} from '../models/models'

const MyQuestionView = React.createClass ({

    getInitialState: function() {
        return STORE._getData()
    },

    componentWillMount: function() {

        var queryForQuestions = {
            authorId: User.getCurrentUser()._id
        }

        ACTIONS._fetchQuestions(queryForQuestions)
        STORE.on('updateContent', () => {
            this.setState(STORE._getData())
        })

    },

    componentWillUnmount: function() {
        STORE.off('updateContent')
    },

    render: function() {
        console.log(this.props)
        return (
            <div className = 'dashboard'>
                <Header />
                <Question coll = {this.state.collection}/>
            </div>
        )
    }
})

const Question = React.createClass({

    _createQuestion: function(model) {
            return (
                <div>
                    <Dashboard model = {model} key = {model.cid} />
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
        if(this.props.model.get('answered') === false) {
            return 'NO'
        }
        else {
            return 'YES'
        }
    },

    _getPostedOn: function() {
        var dateString = this.props.model.get('createdAt')

        return dateString.substr(0,10)
    },

    _handleDelete: function() {
        ACTIONS._deleteQuestion(this.props.model.get('_id'))
    },

    render: function() {
        return (
            <div className = 'dashboardBody'>
                <div className = 'left'>
                    <a href = {`#question/${this.props.model.get('_id')}`}>question: {this.props.model.get('question')}</a>
                    <p>content: {this.props.model.get('content')}</p>
                </div>
                <div className = 'right'>
                    <p>posted by: {this.props.model.get('username')}</p>
                    <p>posted on: {this._getPostedOn()}</p>
                    <p>tags: {this.props.model.get('tags')[0]}</p>
                    <p>answered: {this._getAnsweredStatus()}</p>
                    {/*<p> # of answers:</p>*/}
                    <button onClick = {this._handleDelete}>Remove</button>
                </div>
                <hr />
            </div>
        )
    }
})

export default MyQuestionView