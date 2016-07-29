import _ from 'underscore'
import Backbone from 'backbone'
import {QuestionCollection} from './models/models'

const STORE = _.extend( Backbone.Events, {

    data: {
        collection: new QuestionCollection()
    },

    _initialize: function() {
        this.data.collection.on('sync unpdate', this._broadcastChange.bind(this))
    }
})

STORE._initialize()

export default STORE