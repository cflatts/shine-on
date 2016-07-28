import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'
import HomeView from './views/homeView'
import DashboardView from './views/dashboardView'
import MyQuestionsView from './views/myQuestionsView'
import SignInView from './views/signInView'
import AnswerView from './views/answerView'


const app = function() {

    var AppRouter = Backbone.Router.extend ({

        routes: {
            'home': 'goHome',
            'dashboard': 'goToDashboard',
            'myQuestions': 'goToMyQuestions',
            'signIn': 'goToSignIn',
            'answerView': 'goToAnswer',
            '*catchall': 'defaultDashboard'
        },

        goHome: function() {
            ReactDOM.render(<HomeView />, document.querySelector('.container'))
        },

        goToDashboard: function() {
            ReactDOM.render(<DashboardView />, document.querySelector('.container'))
        },

        goToMyQuestions: function() {
            ReactDOM.render(<MyQuestionView />, document.querySelector('.container'))
        },

        goToSignIn: function() {
            ReactDOM.render(<SignInView />, document.querySelector('.container'))
        },

        goToAnswer: function() {
            ReactDOM.render(<AnswerView />, document.querySelector('.container'))
        },

        defaultDashboard: function() {
            location.hash = '/dashboard'
        },

        initialize: function() {
            Backbone.history.start()
        }
    })
    new AppRouter()
}

// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE.
export const app_name = init()
app()
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..