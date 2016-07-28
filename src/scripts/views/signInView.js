import React from 'react'
import Header from './Header'


const SignInView = React.createClass ({
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

                <form className = 'signin' id = 'login' onSubmit = {this._handleLogin>
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