import React from 'react'
import DashboardView from './dashboardView'
import ACTIONS from '../actions'

const FilterBar = React.createClass ({

    _handleFilter: function(evt) {
        ACTIONS._filterQuestions(evt.target.value)
    },

    render: function() {
        return(
            <div className = 'filterBar'>
                <button value  = 'Science'onClick = {this._handleFilter}>Science</button>
                <button value = 'Technology' onClick = {this._handleFilter}>Technology</button>
                <button value = 'Engineering' onClick = {this._handleFilter}>Engineering</button>
                <button value = 'Math' onClick = {this._handleFilter}>Math</button>
                <button value = 'All' onClick = {this._handleFilter}>All</button>
            </div>
        )
    }
})

export default FilterBar