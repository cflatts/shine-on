import {User, QuestionCollection, QuestionModel, AnswerModel, AnswerCollection, MessageModel, MessageCollection} from './models/models'
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
        let qCollection = new QuestionCollection()
        qCollection.fetch({
            data: inputQuery
        }).then((d) => {
            STORE._set('collection', qCollection)
        })
    },

    _fetchSingleQuestion: function(inputQuery) {
        STORE.data.model.fetch({
            url: 'api/question/' + inputQuery.questionId
        })
    },

    _deleteQuestion: function(questionId) {
        let question = STORE.data.collection.get(questionId)
        let collectionMods = STORE.data.collection.toJSON()

        let modelCopy = new QuestionModel(question.toJSON())
        let collectionCopy = new QuestionCollection(collectionMods)

        question.destroy().then((serverRes) => {
            collectionCopy.remove(modelCopy)
            STORE._set('collection', collectionCopy)
        })
    },

    _filterQuestions:function(tagValue) {
        // console.log(tagValue)

        STORE._set('viewType', tagValue)
    },

    _searchQuestions: function(searchValue) {
        // console.log('_searchQuestions')
        let questionCollection = new QuestionCollection()
        questionCollection.fetch({
            data: {
                regex__question: searchValue
            }
        }).then(() => {
            STORE._set('collection',questionCollection)
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

    _addAnswerNum: function() {
        let question = STORE.data.model

        question.set('numOfAnswers', question.get('numOfAnswers') + 1 )

        question.save().then(function(response) {
        })
        STORE._broadcastChange()

    },

    _minusAnswerNum: function() {
        let question = STORE.data.model

        question.set('numOfAnswers', question.get('numOfAnswers') - 1 )

        question.save().then(function(response) {
            console.log(response)
        })
        STORE._broadcastChange()
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

    _toggleAnswer: function(answerId) {
        let question = STORE.data.model
        // console.log(STORE.data.collection)
        // console.log(question)
        question.set('isAnswered', question.get('isAnswered') ? null: answerId)

        question.save().then(function(response) {
            console.log(response)
        })
        STORE._broadcastChange()
    },

    //MESSAGE ACTIONS

    _submitMessage: function(messageObj) {
        var message = new MessageModel(messageObj)

        message.save().then(
            (response) => {
                location.hash = 'question/dashboard'
            },
            (error) => {
                console.log(error)
            }
        )
    }

}

export default ACTIONS