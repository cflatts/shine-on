import React from 'react'
import ACTIONS from '../actions'
import DashboardView from './dashboardView'

const SearchBar = React.createClass ({

    _handleSearchQuestions: function(evt) {
        // console.log('search handler')
        if(evt.keyCode === 13) {
            ACTIONS._searchQuestions(evt.target.value)
            evt.target.value = ''
        }
    },

    render: function() {
        return (
            <div className = 'search'>
                <input type = 'text' placeholder = 'Find a question by keyword! (i.e JavaScript!)' onKeyDown = {this._handleSearchQuestions}></input>
            </div>
        )
    }
})

export default SearchBar