import express from "express";

const PORT = 9000;

const app = express();

app.get("/", (req, res) => {
  res.send("hello page");
});

const server = app.listen( PORT , ()=>{
  const address = server.address().address;
  
  console.log(`Server Running at ${address === "::" ? "localhost" : address}:${PORT}`);
})