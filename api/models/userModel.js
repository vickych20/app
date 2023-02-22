const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "plz add a name"],
  },
  email: {
    type: String,
    required: [true, "plz add a email"],
    unique: true,
    trim: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "plz enter valid email",
    ],
  },
  password: {
    type: String,
    required: [true, "plz add a password"],
    minLength: [6, "password must be up to 6 characters"],
    maxLength: [26, "password must not be more then 26 characters"],
  },
  photo: {
    type: String,
    required: [true, "plz add a photo"],
    default:
      "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202212/avatar-the-way-of-water_1200x768_1-sixteen_nine.jpeg?size=948:533",
  },
  phone: {
    type: String,
    default: "+91",
  },
  bio: {
    type: String,
    default: "bio",
    minLength: [6, "password must be up to 6 characters"],
    maxLength: [26, "password must not be more then 26 characters"],
  },
},{timestamps:true,});
const User = mongoose.model("User", userSchema);
module.exports = User;