const mongoose = require('mongoose');
const createModel = mongoose.model.bind(mongoose);
const Schema = mongoose.Schema;

// ----------------------
// USERS
// ----------------------
const usersSchema = new Schema({
  // required for authentication: DO NOT TOUCH Or You May Get Punched
  email: {type: String, required: true },
  password: {type: String, required: true },
  // x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x
  username:{ type: String, required: true },
  createdAt: { type: Date, default: Date.now }

})

const questionsSchema = new Schema({
    question: {type: String, required: true},
    content: {type: String},
    authorId: {type: String, required: true},
    isAnswered: {type: String, default: null},
    tags: {type: String, required: true},
    username: {type: String, required: true},
    numOfAnswers: {type: Number, default: 0}
},
{
    timestamps: true
})

const answerSchema = new Schema ({
    answer: {type: String, required: true},
    username: {type: String, required: true},
    questionId: {type: String, required: true},
    authorId: {type: String, required: true}
},
{
    timestamps:true
})

module.exports = {
  User: createModel('User', usersSchema),
  Question: createModel('Question', questionsSchema),
  Answer: createModel('Answer', answerSchema)
}


