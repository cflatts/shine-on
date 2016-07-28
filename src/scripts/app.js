import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'
import LoginView from './views/loginView'
import DashboardView from './views/DashboardView'
import ComposeView from './views/ComposeView'
import MyQuestionsView from './views/myQuestionsView'
import HomeView from './views/homeView'



const app = function() {

    var AppRouter = Backbone.Router.extend ({
        routes: {
            'home': 'goHome',
            'login': 'goToLogin',
            'dashboard': 'goToDashboard',
            'myQuestions': 'goToMyQuestions',
            'compose': 'goToCompose',
            'singleQuestion': 'goToSingleQuestion',
            '*catchall': 'redirectDashboard'
        },

        goHome: function() {
            ReactDOM.render(<HomeView />, document.querySelector('.container'))
        },

        goToLogin: function() {
            ReactDOM.render(<LoginView />, document.querySelector('.container'))
        },

        goToDashboard: function() {
            ReactDOM.render(<DashboardView />, document.querySelector('.container'))
        },

        goToMyQuestions: function() {
            ReactDOM.render(<MyQuestionsView />, document.querySelector('.container'))
        },

        goToCompose: function() {
            ReactDOM.render(<ComposeView />, document.querySelector('.container'))
        },

        goToSingleQuestion: function() {
            ReactDOM.render(<SingleQuestionView />, document.querySelector('.container'))
        },

        redirectDashboard: function() {
            location.hash = 'dashboard'
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