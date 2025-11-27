const mongoose=require('mongoose')
const db="mongodb+srv://ss:1234@cluster0.ytjhx2g.mongodb.net/?appName=Cluster0"


mongoose.connect(db,{}).then(()=>console.log('connection start'))
.catch((error)=>console.log(error.message))