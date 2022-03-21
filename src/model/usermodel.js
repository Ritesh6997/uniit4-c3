const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName : {type : String, required : true},
    email:{type : String, required : true,unique:true},
    password:{type:String,required:true},
    age : {type : Number, required : true},
    profileimage:{type:String,required:true},
},{
    timestamps : true,
    versionKey : false,
})

userSchema.pre("save", function(next){
    const hash = bcrypt.hashSync(this.password, 8);
    this.password = hash;
    return next();
})

userSchema.methods.checkPassword = function(password){
    return bcrypt.compareSync(password, this.password);
}

const User = mongoose.model("user", userSchema);

module.exports = User;