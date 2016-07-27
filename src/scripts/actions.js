import {User, QuestionModel} from './models/models'

//in here will be any action that manipulates the user or post (saving, updating, voting, etc.)
//most of this is passport

const ACTIONS = {

    _registerUser: function(userObj) {
        User.register(userObj, function(error) {
            if(userObj) {
                location.hash = '/dashboard'
            }
        })
    }

}

export default ACTIONS