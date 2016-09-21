import _ from 'underscore'
import Backbone from 'backbone'
import {QuestionCollection, QuestionModel, AnswerModel, AnswerCollection, MessageModel, MessageCollection} from './models/models'

const STORE = _.extend( Backbone.Events, {

    data: {
        collection: new QuestionCollection(),
        model: new QuestionModel(),
        answerCollection: new AnswerCollection(),
        answerModel: new AnswerModel()
        messageModel: new MessageModel(),
        messageCollection: new MessageCollection()
    },

    _getData: function() {
        // console.log(this.data)
        return _.clone(this.data)
    },

    _broadcastChange: function() {
        this.trigger('updateContent')
    },

    _initialize: function() {
        this.data.collection.on('sync update', this._broadcastChange.bind(this)),
        this.data.model.on('sync update', this._broadcastChange.bind(this)),
        this.data.answerCollection.on('sync update', this._broadcastChange.bind(this)),
        this.data.answerModel.on('sync update', this._broadcastChange.bind(this))
    },

    _addAnswer: function(answerModel) {
        this.data.answerCollection.add(answerModel)
    },

    _set: function(prop, value) {
        // console.log(prop, value)
        if(this.data[prop] === undefined) {
            console.log('does not exist')
        }
        this.data[prop] = value
        this._broadcastChange()
    }
})

STORE._initialize()

export default STORE