import React from 'react'
import ACTIONS from '../actions'
import {User} from '../models/models'

const Header = React.createClass({

    _displayUsername: function() {
        if(!User.getCurrentUser()) {
            return ''
        }
        else {
            return User.getCurrentUser().username
        }
    },

    render: function() {
        return (
            <div className = 'header'>
                <h1>Shine On!</h1>
                <p> Welcome {this._displayUsername()}</p>
                <button onClick = {ACTIONS._logOut}>Log out</button>
                <Navigation />
            </div>
            )
    }
})

const Navigation = React.createClass ({
    render: function() {
        return (
            <div className = 'navigation'>
                <a href = '#home'>Home</a>
                <a href = '#question/dashboard' onClick = { ()=> { ACTIONS._fetchQuestions({}) }}>Dash</a>
                <a href = '#ask'>Ask!</a>
                <a href = '#question/myQuestions'>My Questions</a>
                <a href = '#signIn'>Sign In</a>
            </div>
        )
    }
})

export default Header