import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hola Mundo!");
});

app.post('/login', (req, res) => {
  const { user, password } = req.body;
  console.log({ user, password });
  res.send("login!");
});

app.listen(port, () => {
  console.log(`Server listen http://localhost:${port}/`);
});
