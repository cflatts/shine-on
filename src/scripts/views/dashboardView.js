import React from 'react'
import Header from './Header'
import STORE from '../store'
import ACTIONS from '../actions'

const DashboardView = React.createClass ({

    getInitialState: function() {
        return STORE._getData()
    },

    componentWillMount: function() {

    },

    componentWillUnmount: function() {
        STORE.off('updateContent')
    },

    render: function() {
        console.log(this.props)
        return (
            <div className = 'dashboard'>
                <Header />
                <Dashboard />
            </div>
        )
    }
})

const Dashboard = React.createClass ({
    // console.log(this.props)
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