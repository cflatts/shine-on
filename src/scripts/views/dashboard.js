import React from 'react'
import Header from '/dashboard'

const DashboardView = React.createClass ({
    render: function() {
        return (
            <div className = 'dashboard'>
                <Header />
            </div>
        )
    }
})