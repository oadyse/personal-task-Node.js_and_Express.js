const mongoose = require("mongoose");

const connect = () => {
  mongoose
    .connect("mongodb+srv://sparta:sparta@cluster0.7din7v3.mongodb.net/?retryWrites=true&w=majority")
    .catch(err => console.log(err));
};

mongoose.connection.on("error", err => {
  console.error("MongoDB connection error: ", err);
});

module.exports = connect;