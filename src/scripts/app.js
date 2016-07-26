import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'


const app = function() {

    var AppRouter = Backbone.Router.extend ({
        routes: {
            home: 'goHome',
            dashboard: 'goToDashboard',
            myQuestions: 'goToMyQuestions',
            *catchall: 'redirectDashboard'
        }
    })
}

// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE.
export const app_name = init()
app()
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..