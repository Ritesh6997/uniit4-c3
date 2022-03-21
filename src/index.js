const express =require("express");
const app =express();
module.exports=app;
const userController = require("./controllers/usercontroller"); 
const bookController=require("./controllers/bookcontroller");
const {register,login} = require("./controllers/auth.controller");
const commentController=require("./controllers/comment")
app.use(express.json());


app.use("/users", userController)

app.post("/register", register)

app.post("/login", login)

app.use("/book", bookController);
app.use("comment",commentController)