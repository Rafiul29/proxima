require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const projectRoutes = require("./routes/projectRoutes");
const app = express();

//port
const port = process.env.PORT || 4000;

//midlewares
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

//routes
app.use("/api/projects", projectRoutes);

//mongodb
mongoose.set('strictQuery', true);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //listen for server
    app.listen(port, () => {
      console.log(`connect to mongo listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
