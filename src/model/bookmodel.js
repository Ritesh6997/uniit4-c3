const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    content: {type : String, required : true},
    likes : {type : Number, required : true, default:0},
    coverimage:{type:String,required:true},
    userId:{type : mongoose.Schema.Types.ObjectId, ref:"user", required : true},
    publicationId : {type : mongoose.Schema.Types.ObjectId, ref:"publication", required : true}
    
},{
    timestamps : true,
    versionKey : false,
})


const Book = mongoose.model("book", bookSchema);

module.exports = Book;