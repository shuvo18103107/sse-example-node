const app = require("express")();

app.get("/", (req, res) => {
  res.send("Hello from shuvo");
});

app.get("/stream", (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  send(res);
});

//make a loop counter for hello from server

function send(res) {
  let counter = 0;
  setInterval(() => {
    res.write(`data: Hello from server ${counter}\n\n`);
    counter++;
  }, 1000);
}

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
