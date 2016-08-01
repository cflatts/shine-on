import _ from 'underscore'
import Backbone from 'backbone'
import {QuestionCollection, QuestionModel, AnswerModel, AnswerCollection} from './models/models'

const STORE = _.extend( Backbone.Events, {

    data: {
        collection: new QuestionCollection(),
        model: new QuestionModel(),
        answerCollection: new AnswerCollection(),
        answerModel: new AnswerModel()
    },

    _getData: function() {
        return _.clone(this.data)
    },

    _broadcastChange: function() {
        this.trigger('updateContent')
    },

    _initialize: function() {
        this.data.collection.on('sync update', this._broadcastChange.bind(this)),
        this.data.model.on('sync update', this._broadcastChange.bind(this))
    }
})

STORE._initialize()

export default STORE