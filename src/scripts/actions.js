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

    _filterQuestions:function(tagValue) {
        console.log(tagValue)

        STORE._set('viewType', tagValue)
    },

    _searchQuestions: function(searchValue) {
        console.log('_searchQuestions')
        let qc = new QuestionCollection()
        qc.fetch({
            data: {
                regex__question: searchValue
            }
        }).then(() => {
            STORE._set('collection',qc)
        })
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

    _selectAnswer: function(answerId) {
        console.log('needs to equal answer>>', answerId)
        let question = STORE.data.model
        // console.log(STORE.data.collection)
        // console.log(question)
        question.set('isAnswered', question.get('isAnswered') ? null: answerId)

        question.save().then(function(response) {
            console.log(response)
        })
        STORE._broadcastChange()
    }

}

export default ACTIONS