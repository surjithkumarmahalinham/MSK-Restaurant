const mongoose = require('mongoose');

//db creation
mongoose.connect("mongodb://localhost:27017/logindb",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connected");
}).catch((error)=>{
    console.log(error);
})