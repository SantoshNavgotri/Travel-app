const products = require("../Models/Model.js")
const Data=require("../CardApi.js") 
const data=async()=>{
    await products.deleteMany({})
    await products.insertMany(Data)
}

module.exports=data;