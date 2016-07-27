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
                    <input type = 'text' placeholder = 'email' name = 'register-email'/>
                    <input type = 'text' placeholder = 'username' name = 'register-username' />
                    <input type = 'password' placeholder = 'password' name = 'register-password' />
                    <input type = 'password' placeholder = 'confirm password' name = 'confirm-password' />
                    <button type = 'submit'>Submit</button>
                </div>
                <div className = 'login'>
                    <h3>Login</h3>
                    <input type = 'text' placeholder = 'username or email' name = 'login-identifier' />
                    <input type = 'password' placeholder = 'password' name = 'login-password' />
                    <button type = 'submit'>Login</button>
                </div>
            </div>
        )
    }
})

export default LoginView