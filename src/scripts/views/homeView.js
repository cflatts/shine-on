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
                    <h1>let's get In<i>formation</i></h1>
                    <p>ShineOn is the destination for women in STEM: a place to ask questions, cheer each other on, and keep shining together!</p>
                    <Footer />
                </div>
            </div>
        )
    }
})

export default HomeView