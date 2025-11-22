const express = require("express");
const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
  res.send("Hello DevOps! 🚀");
  res.send("Új üzenet a szerverről a trunk based verziókövetés bemutatásához.");
});

app.listen(PORT, () => {
  console.log(`Szerver fut az alábbi címen: http://localhost:${PORT}`);
});
