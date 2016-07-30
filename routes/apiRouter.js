let Router = require('express').Router;
const apiRouter = Router()
let helpers = require('../config/helpers.js')

let User = require('../db/schema.js').User
let QuestionModel = require('../db/schema.js').Question


  apiRouter
    .get('/users', function(req, res){
      User.find(req.query , "-password", function(err, results){
        if(err) return res.json(err)
        res.json(results)
      })
    })

  apiRouter
    .get('/users/:_id', function(req, res){
      User.findById(req.params._id, "-password", function(err, record){
        if(err || !record ) return res.json(err)
        res.json(record)
      })
    })
    .put('/users/:_id', function(req, res){
      User.findById(req.params._id, "-password",function(err, record){
        if(err || !record) return res.json(err)
        let recordWithUpdates = helpers.updateFields(record, req.body)
        recordWithUpdates.save(function(err){
          if(err) return res.json(err)
          res.json(recordWithUpdates)
        })
      })
    })
    .delete('/users/:_id', function(req, res){
      User.remove({ _id: req.params._id}, (err) => {
        if(err) return res.json(err)
        res.json({
          msg: `record ${req.params._id} successfully deleted`,
          _id: req.params._id
        })
      })
    })

    // Routes for a Model(resource) should have this structure

//this route is to post an individual question

apiRouter.post('/question', function(request, response) {
    const question = new QuestionModel(request.body)
    question.save(function(error) {
        if(error) {
            response.send(error)
        }
        else {
            response.json(question)
        }
    })
})

//this route is to display all posts from any user

apiRouter.get('/question', function(request, response) {
    QuestionModel.find(request.query, function(error, records) {
        if(error) {
            response.send(error)
        }
        else {
            response.json(records)
        }
    })
})

//this route is to display all posts from a single specific user

apiRouter.get('/user/question', function(request, response) {
    QuestionModel.find({authorId: request.user._id}, function (error, records) {
        if(error) {
            response.send(error)
        }
        else {
            response.json(records)
        }
    })
})

//this route is to display a single post from any user

apiRouter.get('/question/:_id', function(request, response) {
    QuestionModel.findById(request.params._id, function(error, records) {
        if(error) {
            response.send(error)
        }
        else {
            response.json(records)
        }
    })
})

module.exports = apiRouter