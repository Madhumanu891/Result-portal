let express=require("express")
let mongoose=require("mongoose")
let cors=require("cors")
let bodyParser=require("body-parser")
const rt = require("./routes/rt")
mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("ok")
})
let app=express()
app.use(express.json())
app.use(bodyParser.urlencoded({"extended":true}))
app.use(cors({
          origin:["https://result-portal-client.vercel.app/"],
          methods:["POST","GET","PUT","DELETE"],
          credentials: true 
        }
    
            ))
app.use("/pic",express.static("./phots"))
app.get("/",(req,res)=>{
    res.send("Hello")
})
app.use("/",rt)
app.listen(5000)
