import React from 'react'
import Header from './Header'

const MyQuestionsView = React.createClass ({
    render: function() {
        return (
            <div className = 'my-question'>
                <Header />
                <MyQuestion />
            </div>
        )
    }
})

const MyQuestion: function() {
    render: function() {
        return (
            <div className = 'dashboardBody'>
                <h3>Question</h3>
                <p>context:</p>
                <p>posted by:</p>
                <p>posted on:</p>
                <hr />
            </div>
        )
    }
}

export default MyQuestionsView