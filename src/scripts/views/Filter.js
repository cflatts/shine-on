import React from 'react'
import DashboardView from './dashboardView'

const FilterBar = React.createClass ({
    render: function() {
        return(
            <div className = 'filterBar'>
                <button>Science</button>
                <button>Technology</button>
                <button>Engineering</button>
                <button>Math</button>
            </div>
        )
    }
})

export default FilterBar