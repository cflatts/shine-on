import React from 'react'
import Header from './Header'

const HomeView = React.createClass ({
    render:function() {
        return (
            <div className = 'home'>
                <Header />
                <h2>SHINE THEORY</h2>
                <h3>I don't shine if you don't shine</h3>
                <p>Aminatou Sow (founder of Tech Ladymafia, among other accomplishments)</p>
            </div>
        )
    }
})

export default HomeView

// <img className  = 'homeImage' src = 'http://images.smh.com.au/2012/03/12/3118352/female-bosses-wide-620x349.jpg' />