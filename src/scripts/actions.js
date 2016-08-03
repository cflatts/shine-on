import {User, QuestionCollection, QuestionModel, AnswerModel, AnswerCollection} from './models/models'
import STORE from './store'

const ACTIONS = {

    //USER ACTIONS
    _registerUser: function(userObj) {
        User.register(userObj).then( () => this._logIn(userObj.email, userObj.password),
            (error) => {
                console.log(error)
            }
        )
    },

    _logIn: function(email, password) {
        User.login(email, password).then(
            (response) => {
                location.hash = 'question/dashboard'
            },
            (error) =>{
                console.log(error)
            }
        )
    },

    _logOut: function() {
        User.logout().then(
            () => location.hash = 'home'
        )
    },

    //QUESTION ACTIONS
    _submitQuestion: function(questionObj) {
        var question = new QuestionModel(questionObj)
        question.save().then(
            (response) => {
                console.log(response)
                location.hash = 'question/dashboard'
            },
            (error) => {
                console.log(error)
            }
        )
    },

    _fetchQuestions: function(inputQuery) {
        STORE.data.collection.fetch({
            data: inputQuery
        })
    },

    _fetchSingleQuestion: function(inputQuery) {
        STORE.data.model.fetch({
            url: 'api/question/' + inputQuery.questionId
        })
    },

    _deleteQuestion: function(questionId) {
        let question = STORE.data.collection.get(questionId)
        question.destroy()
    },

    //ANSWER ACTIONS

    _submitAnswer: function(answerObj) {
        var answer = new AnswerModel(answerObj)
        answer.save().then(
            (response) => {
                STORE._addAnswer(response)
            },
            (error) => {
                console.log(error)
            }
        )
    },

    _fetchAnswers: function(inputQuery) {
        STORE.data.answerCollection.fetch({
            data: inputQuery
        })
    },

    _deleteAnswer: function(answerId) {
        let answer = STORE.data.answerCollection.get(answerId)
        answer.destroy()
    },

    _answerCheck: function(questionId, answerId) {
        let question = STORE.data.collection.get(questionId)
        let answer = STORE.data.answerCollection.get(answerId)

        question.set('answered', question.get('answered') ? false : true)
        answer.set('isAnswer', question.get('isAnswer') ? false : true)

        question.save().then(function(response) {
            console.log(response)
        })

        answer.save().then(function(response) {
            console.log(response)
        })
        STORE.trigger('updateContent')
    }

}

export default ACTIONS