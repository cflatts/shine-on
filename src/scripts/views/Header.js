import React from 'react'
import ACTIONS from '../actions'
import {User} from '../models/models'

const Header = React.createClass({

    _displayUsername: function() {
        if(!User.getCurrentUser()) {
            return <a href = '#signIn'>Sign In</a>
        }
        else {
            return User.getCurrentUser().username
        }
    },

    render: function() {
        return (
            <div className = 'header'>
                <div className = 'welcome'>
                    <div className = 'left'>
                        <h1>Shine On!</h1>
                        <p> Welcome {this._displayUsername()}</p>
                    </div>
                    <div className = 'right'>
                        <button onClick = {ACTIONS._logOut}>Log out</button>
                    </div>
                </div>
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
                <a href = '#message'>Inbox</a>
            </div>
        )
    }
})

export default Header