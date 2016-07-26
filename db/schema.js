const mongoose = require('mongoose');
const createModel = mongoose.model.bind(mongoose);
const Schema = mongoose.Schema;

// ----------------------
// USERS
// ----------------------
const usersSchema = new Schema({
  // required for authentication: DO NOT TOUCH Or You May Get Punched
  email:     { type: String, required: true },
  password:  { type: String, required: true },
  // x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x

   // example of optional fields
  name:      { type: String },
  createdAt: { type: Date, default: Date.now }

})

const questionSchema = new Schema ({
    title: {type: String, required: true},
    content: {type: String},
    //should i make this comments and then make answered nested inside of that? that way i can mark the comment i like the best as "the answer"?
    answered: {type: Boolean, default: false},
    tags: {type: [String], required: true},
    // {timestamp: true} how does this work?
    authorId: {type: String, required: true},
    username: {type: String} //do I put this here or on the user schema?
})

module.exports = {
  User: createModel('User', usersSchema),
  Question: createModel('Question', questionSchema)
}

//what do I need to do to allow people replying to display their credentials?
