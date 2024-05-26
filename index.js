const express = require('express');
const app = express();
const mongoose = require('mongoose');

 (connectDB = async() => {
  try{
  mongoose.connect('mongodb://127.0.0.1:27017/MyLearning');
  const userSchema = mongoose.Schema();
  const users = mongoose.model('users',userSchema);
  const data = await users.find();
  console.log(data);
  }catch(e){
    console.log(e);
  }
})();



//connectDB();

app.listen(8000, () => {
  console.log(`server is up and running`);
});