import _ from 'underscore'
import Backbone from 'backbone'
import {QuestionCollection} from './models/models'

const STORE = _.extend( Backbone.Events, {

    data: {
        collection: new QuestionCollection()
    }
})

export default STORE