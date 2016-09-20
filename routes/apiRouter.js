let Router = require('express').Router;
const apiRouter = Router()
let helpers = require('../config/helpers.js')

let User = require('../db/schema.js').User
let QuestionModel = require('../db/schema.js').Question
let AnswerModel = require('../db/schema.js').Answer
let MessageModel = require('../db/schema.js').Message

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

      User.findByIdAndUpdate(req.params._id, req.body, function(err, record){
          if (err) {
            res.status(500).send(err)
          }
          else if (!record) {
            res.status(400).send('no record found with that id')
          }
          else {
            res.json(Object.assign({},req.body,record))
          }
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


//QUESTION ROUTES

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

apiRouter.put('/question/:_id', function(request, response) {
    let questionId = request.params._id
    QuestionModel.findByIdAndUpdate({_id: questionId}, request.body, {new: true}, function(error, records) {
        if(error) {
            response.send(error)
        }
        else {
            response.json(records)
        }
    })
})
// .put(«route», function(){
//     Model.updateById(«id», «request.body», {new: true}, function(err, rec){...})
// })

//this route is to delete a single post

apiRouter.delete('/question/:_id',function(request,response){
  let questionId = request.params._id
  QuestionModel.remove({_id:questionId},function(error) {
    if (error) {
      response.json({
        error: error
      })
    }
    else {
      response.status(200).json({
        msg: 'Question successfully deleted!'
      })
    }
  })
})

//ANSWER ROUTES

//this route is to create an individual answer

apiRouter.post('/answer', function(request, response) {
    let answer = new AnswerModel(request.body)
    answer.save(function(error) {
        if(error) {
            response.send(error)
        }
        else {
            response.json(answer)
        }
    })
})

//this route is to get all the answers
apiRouter.get('/answer', function(request, response) {
    AnswerModel.find(request.query, function(error, records) {
        if(error) {
            response.send(error)
        }
        else {
            response.json(records)
        }
    })
})

apiRouter.delete('/answer/:_id', function(request, response) {
    let answerId = request.params._id
    AnswerModel.remove({_id:answerId}, function(error) {
        if(error) {
            response.json({
                error:error
            })
        }
        else {
            response.status(200).json ({
                msg: 'Answer successfully deleted!'
            })
        }
    })
})

//MESSAGE ROUTES

apiRouter.post('/message', function(request, response) {
    let message = new MessageModel(request.body)
    message.save(function(error) {
        if(error) {
            response.send(error)
        }
        else {
            response.json(answer)
        }
    })
})

apiRouter.get('/message', function(request, response) {
    MessageModel.find(request.query, function(error, records) {
        if(error) {
            response.send(error)
        }
        else {
            response.json(records)
        }
    })
})

// apiRouter.get('/question/:_id', function(request, response) {
//     QuestionModel.findById(request.params._id, function(error, records) {
//         if(error) {
//             response.send(error)
//         }
//         else {
//             response.json(records)
//         }
//     })
// })

apiRouter.get('/message/:_id', function(request, response) {
    MessageModel.findById(request.param._id, function(error, records) {
        if(error) {
            response.send(error)
        }
        else {
            response.json(records)
        }
    })
})

module.exports = apiRouter