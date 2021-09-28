import express from "express";

import requests from "./routes/requests.js";

const PORT = 9000;

const app = express();

app.use(express.static("public"));

app.get("/index.html", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.use("/requests", requests);

const server = app.listen(PORT, () => {
  const address = server.address().address;

  console.log(
    `Server Running at ${address === "::" ? "localhost" : address}:${PORT}`
  );
});
