import React from 'react'
import Header from './Header'

const DashboardView = React.createClass ({
    render: function() {
        return (
            <div className = 'dashboard'>
                <Header />
                <Dashboard />
            </div>
        )
    }
})

const Dashboard = React.createClass ({
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
})

export default DashboardView