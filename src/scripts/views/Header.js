import React from 'react'

const Header = React.createClass({
    render: function() {
        return (
            <div className = 'header'>
                <h1>Shine On!</h1>
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
                <a href = '#dashboard'>Dash</a>
                <a href = '#myQuestions'>My Questions</a>
            </div>
        )
    }
})

export default Header