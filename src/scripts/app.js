import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'
import {User, QuestionModel, QuestionCollection, AnswerModel, AnswerCollection, MessageModel, MessageCollection} from './models/models'
import HomeView from './views/homeView'
import AskView from './views/askView'
import DashboardView from './views/dashboardView'
import MyQuestionsView from './views/myQuestionsView'
import SignInView from './views/signInView'
import AnswerView from './views/answerView'


const app = function() {

    var AppRouter = Backbone.Router.extend ({

        routes: {
            'home': 'goHome',
            'ask': 'goToAsk',
            'question/dashboard': 'goToDashboard',
            'question/myQuestions': 'goToMyQuestions',
            'signIn': 'goToSignIn',
            'question/:questionId': 'goToAnswer',
            'message': 'goToMessages',
            '*catchall': 'defaultDashboard'
        },

        goHome: function() {
            ReactDOM.render(<HomeView />, document.querySelector('.container'))
        },

        goToAsk: function() {

            if(!User.getCurrentUser()) {
                location.hash  = 'home'
            }
            else {
                ReactDOM.render(<AskView />, document.querySelector('.container'))
            }
        },

        goToDashboard: function() {

            if(!User.getCurrentUser()) {
                location.hash = 'home'
            }
            else {
                ReactDOM.render(<DashboardView/>, document.querySelector('.container'))
            }
        },

        goToMyQuestions: function() {
            if(!User.getCurrentUser()) {
                location.hash = 'home'
            }
            else {
                ReactDOM.render(<MyQuestionsView/>, document.querySelector('.container'))
            }
        },

        goToSignIn: function() {
            ReactDOM.render(<SignInView />, document.querySelector('.container'))
        },

        goToAnswer: function(questionId) {
            ReactDOM.render(<AnswerView questionId = {questionId}/>, document.querySelector('.container'))
        },

        goToMessages: function() {
            ReactDOM.render(<MessageView />, document.querySelector('.container'))
        },

        defaultDashboard: function() {
            location.hash = 'home'
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