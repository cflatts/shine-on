let Router = require('express').Router;
const apiRouter = Router()
let helpers = require('../config/helpers.js')

let User = require('../db/schema.js').User
let Question = require('../db/schema.js').Question


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

//this is an express router that takes a path and a callback as input, if the path matches the callback is fun
apiRouter.get('/question', function(request, response) {
    let question = new QuestionModel(request.body) //creates a new instance of the mongoose model with the information we have on the body of the request

    question.save(function(error) { //we want to save the new model to the database using a built in '???? method'
        if(error) {
            response.send(error) //if the save was NOT successful the response will send an error
        }
        else {
            response.json(question) // if the save is successful if will send a json response with the question as the data
        }
    })

})


module.exports = apiRouter