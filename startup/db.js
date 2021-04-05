const mongoose = require("mongoose");

module.exports = () => {
  const db = process.env.DB;
  mongoose
    .connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    .then(() => console.log(`💾  Mongodb Connected to ${db}`))
    .catch((err) => console.log(err));
};
