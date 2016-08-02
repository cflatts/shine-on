import Backbone from 'backbone'
import React from 'react'

const ResponseView = React.createClass ({
    render: function() {
        return (
            <div className = 'answerView'>
                <Respond />
            </div>
        )
    }
})

const Respond = React.createClass ({

    _handleAnswerSubmit: function(evt) {
        evt.preventDefault()


        ACTIONS._submitAnswer ({
            answer: evt.target.answer.value,
            username: User.getCurrentUser().username,
            authorId: User.getCurrentUser()._id,
            questionId: this.props.model.get('_id'),
            isAnswer: false
        })
    },

    render: function() {
        console.log(this.props)
        return (
            <div className = 'answerBody'>
                <form>
                    <textarea className = 'giveAnswer' name = 'answer' placeholder = 'I have an answer for that!'></textarea>
                    <button className = 'handleAnswerSubmit' onSubmit = {this._handleAnswerSubmit}>Submit</button>
                </form>
            </div>
        )
    }
})

export default AnswerView