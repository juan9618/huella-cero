const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// LOGIN
app.post("/api/users/login", (req, res) => {
  const { email, password } = req.body;

  if (email === "test@test.com" && password === "1234") {
    return res.json({ token: "123abc" });
  }

  res.status(401).json({ message: "Error" });
});

// CALCULAR HUELLA
app.post("/api/huella/calcular", (req, res) => {
  const { transporte, energia } = req.body;

  const huella = (transporte * 0.2) + (energia * 0.5);

  res.json({ huella });
});

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});