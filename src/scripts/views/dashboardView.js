import React from 'react'
import Header from './Header'
import STORE from '../store'
import ACTIONS from '../actions'
import {User, QuestionModel, QuestionCollection, AnswerModel, AnswerCollection} from '../models/models'
import FilterBar from './Filter'
import SearchBar from './Search'

const DashboardView = React.createClass ({

    getInitialState: function() {
        return STORE._getData()
    },

    componentWillMount: function() {
        ACTIONS._fetchQuestions()
        STORE.on('updateContent', () => {
            this.setState(STORE._getData())
        })

    },

    componentWillUnmount: function() {
        STORE.off('updateContent')
    },

    render: function() {

        let coll = this.state.collection

        switch(this.state.viewType) {
            case 'Science':
                coll = this.state.collection.where({tags: 'Science'})
                break
            case 'Technology':
                coll = this.state.collection.where({tags: 'Technology'})
                break
            case 'Engineering':
                coll = this.state.collection.where({tags: 'Engineering'})
                break
            case 'Math':
                coll = this.state.collection.where({tags: 'Math'})
        }
        console.log(coll)
        return (
            <div className = 'dashboard'>
                <Header />
                <SearchBar />
                <FilterBar />
                <Question coll = {coll}/>
            </div>
        )
    }
})

const Question = React.createClass({

    _createQuestion: function(model) {
        return (
            <div>
                <Dashboard model = {model} key = {model.cid} />
            </div>
            )
    },

    render: function() {
        // console.log(this.props)
        return(
            <div>
                {this.props.coll.map(this._createQuestion)}
            </div>)
    }
})

const Dashboard = React.createClass ({

    _getAnsweredStatus: function() {
        if(this.props.model.get('isAnswered') === null) {
            return 'NO'
        }
        else {
            return 'YES'
        }
    },

    _getPostedOn: function() {
        var dateString = new Date(this.props.model.get('createdAt'))

        return dateString.toLocaleString()
    },

    render: function() {
        return (
            <div className = 'dashboardBody'>
                <div className = 'left'>
                    <a href = {`#question/${this.props.model.get('_id')}`}>{this.props.model.get('question')}</a>
                    <p>{this.props.model.get('content')}</p>
                </div>
                <div className = 'right'>
                    <p>posted by: {this.props.model.get('username')}</p>
                    <p>posted on: {this._getPostedOn()} </p>
                    <p>tags: {this.props.model.get('tags')}</p>
                    <p>answered: {this._getAnsweredStatus()}</p>
                    <p> # of answers:</p>
                </div>
                <hr />
            </div>
        )
    }
})

export default DashboardView