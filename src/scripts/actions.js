import {User, QuestionModel} from './models/models'

//in here will be any action that manipulates the user or post (saving, updating, voting, etc.)
//most of this is passport

const ACTIONS = {

    _registerUser: function(userObj) {
        User.register(userObj).then( () => ACTIONS._loginUser(userObj.email, userObj.password),
            (error) => {
                console.log(error)
            }
        )
    },

    _loginUser: function(email, password) {
        User.login(email, password).then() (
            (response) => {
                console.log(response)
                location.hash = '/dashboard'
            },
            (error) => {
                console.log(error)
            }
        )
    }
}

export default ACTIONS