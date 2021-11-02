const express = require("express");
const app = express();
const mongoose = require("mongoose");
const helmet = require("helmet");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

mongoose.connect('mongodb://localhost:27017/test_bit', () => {
console.log("Connected to MongoDB")
})


//middleware
app.use(express.json());
app.use(helmet());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);

app.listen(8800, () => {
  console.log("Postman is running!");
});
