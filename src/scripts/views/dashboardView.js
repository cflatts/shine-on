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
        console.log(this.props)
        return (
            <div className = 'dashboard'>
                <Header />
                <Dashboard coll = {this.state.collection}/>
            </div>
        )
    }
})

const Dashboard = React.createClass ({
    render: function() {
        console.log(this.props)
        return (
            <div className = 'dashboardBody'>
                <h3>Question</h3>
                <p>context:</p>
                <p>posted by:</p>
                <p>posted on:</p>
                <p>tags:</p>
                <hr />
            </div>
        )
    }
})

export default DashboardView