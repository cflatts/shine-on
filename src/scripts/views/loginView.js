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

    _handleLogin: function(evt) {
        evt.preventDefault()


    },

    _handleRegister: function(evt) { //right now i am going to leave out anything to do with confirming the password, i'll add that in
        evt.preventDefault()

        ACTIONS.registerUser({
            email: evt.target.register-email.value,
            username: evt.target.register-username,
            password: evt.target.register-password,
            confirmPassword: evt.target.confirm-password
        })


    },

    render: function() {
        return (
            <div className = 'signin-view'>
                <form className = 'signin' id = 'register'>
                    <h3>Register</h3>
                        <div className = 'styling-hack'>
                            <input type = 'text' placeholder = 'email' name = 'register-email'/>
                            <input type = 'text' placeholder = 'username' name = 'register-username' />
                        </div>
                        <div className = 'styling-hack'>
                            <input type = 'password' placeholder = 'password' name = 'register-password' />
                            <input type = 'password' placeholder = 'confirm password' name = 'confirm-password' />
                        </div>
                    <button type = 'submit' onSubmit = {this._handleRegister}>Submit</button>
                </form>
                <form className = 'signin' id = 'login'>
                    <h3>Login</h3>
                    <input type = 'text' placeholder = 'username or email' name = 'login-identifier' />
                    <input type = 'password' placeholder = 'password' name = 'login-password' />
                    <button type = 'submit' onSubmit = {this._handleLogin}>Login</button>
                </form>
            </div>
        )
    }
})

export default LoginView