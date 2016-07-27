import React from 'react'
import Header from './Header'

const DashboardView = React.createClass ({
    render: function() {
        return (
            <div className = 'dashboard'>
                <Header />
            </div>
        )
    }
})

export default DashboardView