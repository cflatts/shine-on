import React from 'react'
import Header from './Header'

const HomeView = React.createClass ({
    render:function() {
        return (
            <div className = 'home'>
                <Header />
            </div>
        )
    }
})

export default HomeView