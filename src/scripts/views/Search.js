import React from 'react'
import ACTIONS from '../actions'

const SearchBar = React.createClass ({

    _handleSearchQuestions: function(evt) {
        if(evt.keycode ===13) {
            ACTIONS._searchQuestions(evt.target.value)
        }
    },

    render: function() {
        return (
            <div className = 'search'>
                <input type = 'text' placeholder = 'Find a question by keyword! (i.e JavaScript!)' onKeyDown = {this._searchQuestions}></input>
            </div>
        )
    }
})

export default SearchBar