require("dotenv").config();
const express = require("express");
const configViewEngine = require("./config/viewEngine");
const webRouter = require("./routers/web");
const app = express();
const port = process.env.PORT || 3000;
const hostname = process.env.HOST_NAME || "localhost";

//config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//config template engine

configViewEngine(app);

app.use("/", webRouter);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
