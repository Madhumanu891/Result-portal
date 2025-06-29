let express=require("express")
let mongoose=require("mongoose")
let cors=require("cors")
let bodyParser=require("body-parser")
const rt = require("./routes/rt")
mongoose.connect("mongodb://127.0.0.1:27017/s34resportal").then(()=>{
    console.log("ok")
})
let app=express()
app.use(express.json())
app.use(bodyParser.urlencoded({"extended":true}))
app.use(cors({
          origin:["https://deploy.mern-1whp.vercel.app"],
          methods:["POST","GET"],
          credential:true
        }
    
            ))
app.use("/pic",express.static("./phots"))
app.get("/",(req,res)=>{
    res.send("Hello")
})
app.use("/",rt)
app.listen(5000)
