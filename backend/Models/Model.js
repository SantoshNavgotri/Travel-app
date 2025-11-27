const mongoose=require('mongoose')

const Schema=new mongoose.Schema({

    id:String,

    name:String,

    price:String,

    img:String,
    boardingPoint:String,
    time:String,
    destination:String,
    routeDetails:String,
    description:String,
    rating:Number
})

const cards=mongoose.model('toor',Schema)

module.exports=cards;