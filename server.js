const express = require("express");
const path = require("path");
const app = express();

let lastCmd = "OFF";

// Servir le dossier "public"
app.use(express.static(path.join(__dirname, "public")));

app.get("/cmd/:value", (req, res) => {
  lastCmd = req.params.value;
  console.log("Commande reçue:", lastCmd);
  res.send("OK");
});

app.get("/state", (req, res) => {
  res.send(lastCmd);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Serveur lancé sur port", PORT);
});
