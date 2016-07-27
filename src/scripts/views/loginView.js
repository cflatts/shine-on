import React from 'react'
import Header from './Header'

const LoginView = React.createClass ({
    render: function() {
        return (
            <div className='loginView'>
                <Header />
                <SignIn />
            </div>
        )
    }
})

const SignIn = React.createClass ({
    render: function() {
        return (
            <div className = 'signin'>
                <div className = 'register'>
                    <h3>Register</h3>
                    <input type = 'text' placeholder = 'email' name = 'email'/>
                    <input type = 'password' placeholder = 'password' name = 'password' />
                    <input type = 'password' placeholder = 'confirm password' name = 'confirm-password' />
                    <button type = 'submit'>Submit</button>
                </div>
                <div className = 'login'>

                </div>
            </div>
        )
    }
})

export default LoginView