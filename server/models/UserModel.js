const mongoose = requier("mongoose")
const Schema = mongoose.Schema

mongoose.model("user")
const UserType = {
    username:String,
    password:String,
    gender:Number, //性别，0,1,2
    introduction:String, //简介
    avatar:String,
    role:Number //管理员1,，编辑2
}

const UserModel = mongoose.model("user",new Schema(UserType))

module.exports = UserModel