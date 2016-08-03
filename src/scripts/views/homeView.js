import React from 'react'
import Header from './Header'

const HomeView = React.createClass ({
    render:function() {
        return (
            <div className = 'home'>
                <Header />
                <img className  = 'homeImage' src = 'http://images.smh.com.au/2012/03/12/3118352/female-bosses-wide-620x349.jpg' />
            </div>
        )
    }
})

export default HomeView