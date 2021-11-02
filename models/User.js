const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      required: true,
      
    },
    password: {
      type: String,
      required: true,
    },
    followers: {
      type: Array,
    },
    followings: {
      type: Array,
    },
    desc: {
      type: String,
    },

  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
