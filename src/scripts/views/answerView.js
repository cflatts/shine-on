import React from 'react'
import Header from './Header'
import STORE from '../store'
import ACTIONS from '../actions'
import {User, QuestionModel, QuestionCollection, AnswerCollection, AnswerModel} from '../models/models'

const AnswerView = React.createClass ({

    getInitialState: function() {
        return STORE._getData()
    },

    componentWillMount: function() {
        console.log(this.state.model)
        console.log(this.props.questionId)

        var queryForSingleQuestion = {
            questionId: this.props.questionId
        }

        console.log(queryForSingleQuestion)
        ACTIONS._fetchSingleQuestion(queryForSingleQuestion)
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
                <Answer model = {this.state.model} />
            </div>
        )
    }
})

const Answer = React.createClass ({

    _getAnsweredStatus: function() {
        if(this.props.model.get('answered') === false) {
            return 'NO'
        }
        else {
            return 'YES'
        }
    },

    render: function() {
        console.log(this.props)
        return (
            <div className = 'dashboardBody'>
                <a href = {`#question/answer/${this.props.model.get('_id')}`}>question: {this.props.model.get('question')}</a>
                <p>content: {this.props.model.get('content')}</p>
                <p>posted by: {this.props.model.get('username')}</p>
                <p>posted on: </p> {/*I don't know how to use this property*/}
                <p>tags:</p>
                <p>answered: {this._getAnsweredStatus()}</p>
                <p># of answers: 0</p>
                <hr />


                <div className = 'responseView'>
                    <div className = 'topAnswer'>
                        <label><input type = 'checkbox' name = 'answer' />This is the answer</label>
                    </div>
                    <form>
                        <textarea name = 'answer' placeholder = 'I have an answer for that!'></textarea>
                        <button>Submit</button>
                        <hr />
                    </form>
                </div>
            </div>
        )
    }
})

export default AnswerView