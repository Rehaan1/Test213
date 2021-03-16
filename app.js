const express = require("express");
const bodyParser = require("body-parser");
const sendMail = require('./routes/mail');
const ejs = require("ejs");

const app = express();

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("index");
});

app.get("/contact",(req,res)=>{
    res.render("contact");
});

app.post('/contact', (req, res) => {
    
    var body = "The Following Potential Customer Wants to Contact: Name: "+req.body.name+", Email: "+ req.body.email+" , Contact No. :"+req.body.contact;
    var sender_email = req.body.email;
    var receiver_email = 'rehaanmazid@gmail.com';
    var email_subject = "Potential Customer Want's To Connect";
    var email_body = body;
    sendMail(sender_email, receiver_email,
        email_subject, email_body);
    res.redirect("/")
});


app.get("/technographics",(req,res)=>{
    res.render("technographics");
});

app.get("/tam",(req,res)=>{
    res.render("tam");
});

app.get("/competitive-intelligence",(req,res)=>{
    res.render("competitive-int");
});

app.get("/icp",(req,res)=>{
    res.render("icp");
});

app.listen(process.env.PORT || 3000,()=>
{
    console.log("Server Up and Running at port 3000");
});
