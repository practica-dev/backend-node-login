import express from "express";
import { login, logout } from "./controllers/index.controllers.js";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hola Mundo!");
});

app.post('/login', (req, res) => {
  const { user, password } = req.body;
  try {
    const token = login(user, password);
    res.send(token);
  } catch (error) {
    const { name, message } =  error;
    res.json({ name, message });
  }
});

app.post('logout', (req, res) => {
  const message = logout(req.headers.token);
  res.json(message);
});

app.listen(port, () => {
  console.log(`Server listen http://localhost:${port}/`);
});
