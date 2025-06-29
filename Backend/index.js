let express=require("express")
let mongoose=require("mongoose")
let cors=require("cors")
let bodyParser=require("body-parser")
const rt = require("./routes/rt")


mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("ok")
})
let app=express()
app.use(express.json())
app.use(bodyParser.urlencoded({"extended":true}))
app.use(cors())
app.use("/pic",express.static("./phots"))
app.use("/",rt)
app.listen(process.env.PORT || 5000)