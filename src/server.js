const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
const app = express();
require('./db/conn.js');
const User = require("./models/usermsg");
const hbs = require('hbs');
const port = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({ extended: true })); 


const staticpath = path.join(__dirname,"../public");
const templatepath = path.join(__dirname,"../templates/views");
const partialspath = path.join(__dirname,"../templates/partials");

app.use('/css',express.static(path.join(__dirname,'../node_modules/bootstrap/dist/css')));
app.use('/js',express.static(path.join(__dirname,'../node_modules/bootstrap/dist/js')));
app.use('/jq',express.static(path.join(__dirname,'../node_modules/jquery/dist')));
app.set('view engine','hbs');
app.set('views',templatepath);
hbs.registerPartials(partialspath);


app.use(express.static(staticpath));
app.get('/',function(req,res){
    res.render('index');
})

app.get('/contact',function(req,res){
    res.render('contact');
})

app.post('/postdata', function(req, res){
    console.log(req.body);
    //res.send("recieved your request!");
 });

app.listen(port,()=>{
    console.log(`server running at port http://localhost:${port}`);
})