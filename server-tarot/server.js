const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("DB connection successful!"));

//environment variables are global variables which are used to define the environment in which a node app is running
//console.log(app.get("env"));

const port = process.env.PORT || 3000;
//this callbacl function called as soon as the server starts listening
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
