import React from 'react'
import Header from './Header'
import ACTIONS from '../actions'
import Footer from './Footer'


const SignInView = React.createClass ({
    render: function() {
        return (
            <div className='loginView'>
                <Header />
                <SignIn />
                <Footer />
            </div>
        )
    }
})

const SignIn = React.createClass ({

    _handleLogin: function(evt) {
        evt.preventDefault()

        ACTIONS._logIn(evt.target.loginIdentifier.value, evt.target.loginPassword.value)
    },

    _handleRegister: function(evt) {
        evt.preventDefault()

        if(evt.target.registerPassword.value === evt.target.confirmPassword.value) {
            ACTIONS._registerUser({
                email: evt.target.registerEmail.value,
                password: evt.target.registerPassword.value,
                username: evt.target.registerUsername.value,
                confirmation: evt.target.confirmPassword.value
            })
        }
        else {
            alert("Invalid information. Check to make sure the passwords match")
            evt.target.value = ''
        }
    },

    render: function() {
        return (
            <div className = 'signin-view'>

                <form className = 'signin' id = 'register' onSubmit = {this._handleRegister} >
                    <h3>Register</h3>
                        <div className = 'styling-hack'>
                            <input type = 'text' placeholder = 'email' name = 'registerEmail'/>
                            <input type = 'text' placeholder = 'username' name = 'registerUsername' />
                        </div>
                        <div className = 'styling-hack'>
                            <input type = 'password' placeholder = 'password' name = 'registerPassword' />
                            <input type = 'password' placeholder = 'confirm password' name = 'confirmPassword' />
                        </div>
                    <button type = 'submit'>Submit</button>
                </form>

                <form className = 'signin' id = 'login' onSubmit = {this._handleLogin}>
                    <h3>Login</h3>
                    <input type = 'text' placeholder = 'username or email' name = 'loginIdentifier' />
                    <input type = 'password' placeholder = 'password' name = 'loginPassword' />
                    <button type = 'submit' >Login</button>
                </form>
            </div>
        )
    }
})

export default SignInView