const express = require("express");
const app = express();
const dotenv = require("dotenv");

dotenv.config();
require("./startup/db")();
require("./startup/routes")(app)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port} 🔥`));
