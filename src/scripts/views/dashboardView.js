import React from 'react'
import Header from './Header'
import STORE from '../store'
import ACTIONS from '../actions'
import {User, QuestionModel, QuestionCollection} from '../models/models'

const DashboardView = React.createClass ({

    getInitialState: function() {
        return STORE._getData()
    },

    componentWillMount: function() {
        ACTIONS._fetchQuestions()
        STORE.on('updateContent', () => {
            this.setState(STORE._getData())
        })

    },

    componentWillUnmount: function() {
        STORE.off('updateContent')
    },

    render: function() {
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

    // _goToAnswerView: function(evt) {
    //     var questionId = this.props.model.get('_id')
    //     console.log(questionId)
    //     location.hash = 'question/' + questionId
    // },

    render: function() {
        console.log(this.props)
        return (
            <div className = 'dashboardBody'>
                <a href = '#answer'>question: {this.props.model.get('question')}</a>
                <p>content: {this.props.model.get('content')}</p>
                <p>posted by: {this.props.model.get('username')}</p>
                <p>posted on: </p> {/*I don't know how to use this property*/}
                <p>tags: {this.props.model.get('tags')[0]}</p>
                <p>answered: {this._getAnsweredStatus()}</p>
                <p> # of answers: {this.props.model.get('answers').length}</p>
                <hr />
            </div>
        )
    }
})

export default DashboardView