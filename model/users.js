
const mongoose =require('mongoose')

const UserSchema = new mongoose.Schema({
    username: {type:String,lowercase:true, required:[true, "can't be blank"], unique:true ,match: [/^[a-zA-Z0-9]+$/, 'is invalid'],index:true},
    email:{type:String,lowercase:true,unique:true, required:[true, "can't be blank"],match:[/\S+@\S+\.\S+/, 'is invalid'] ,index:true},
    password: {type:String, required:true},
    address : {type:String,}
} , {
    collection: 'users'
})


const model =mongoose.model('UserSchema',UserSchema)

module.exports = model
