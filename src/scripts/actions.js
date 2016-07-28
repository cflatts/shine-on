import {User, QuestionCollection, QuestionModel} from './models/models'

const ACTIONS = {

    _registerUser: function(userObj) {
        User.register(userObj).then( () => this.logIn(userObj.email, userobj.password),
            (error) => {
                console.log(error)
            }
        )
    }
}

export default ACTIONS