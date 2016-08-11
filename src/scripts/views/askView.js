import React from 'react'
import Header from './Header'
import ACTIONS from '../actions'
import {User, QuestionModel} from  '../models/models'

const AskView = React.createClass ({
    render: function() {
        return (
            <div className = 'compose'>
                <Header />
                <Ask />
            </div>
        )
    }
})

const Ask = React.createClass ({

    _handleSubmit:function(evt) {
        evt.preventDefault()

        if(document.getElementById('tags').value === '-Tags-') {
            alert('Select a tag!')
        }
        else {
            ACTIONS._submitQuestion({
                question: evt.target.question.value,
                content: evt.target.content.value,
                tags: document.getElementById('tags').value,
                answered:false,
                authorId: User.getCurrentUser()._id,
                username: User.getCurrentUser().username

            })
        }
    },


    render: function() {
        return (
            <form className = 'composeBody' onSubmit = {this._handleSubmit}>
                <input type = 'text' placeholder = 'What is your question?' name = 'question' />
                <textarea placeholder = 'Tell us a little about it.' name = 'content' ></textarea>
                <select id = 'tags' name = 'tags'>
                    <option>-Tags-</option>
                    <option>Science</option>
                    <option>Technology</option>
                    <option>Engineering</option>
                    <option>Math</option>
                </select>
                <button type = 'submit'>Ask us!</button>
            </form>
        )
    }
})

export default AskView