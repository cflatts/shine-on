import React from 'react'
import Header from './Header'
import Footer from './Footer'

const HomeView = React.createClass ({
    render:function() {
        return (
            <div className = 'home'>
                <Header />
                <div className = 'about'>
                    <h1>Ladies</h1>
                    <h1>let's get In<i>Formation</i></h1>
                    <Footer />
                </div>
            </div>
        )
    }
})

export default HomeView