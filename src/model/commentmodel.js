const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    body: {type : String, required : true},
    userId : {type : mongoose.Schema.Types.ObjectId, ref:"user", required : true},
    BookId : {type : mongoose.Schema.Types.ObjectId, ref:"book", required : true}

},{
    timestamps : true,
    versionKey : false,
})


const Comment = mongoose.model("comment", commentSchema);

module.exports = Comment;