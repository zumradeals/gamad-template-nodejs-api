const http = require("http");
const port = process.env.PORT || 3000;
http.createServer((req, res) => {
  if (req.url === "/health") { res.writeHead(200); res.end(JSON.stringify({status:"ok"})); return; }
  res.writeHead(200); res.end(JSON.stringify({message:"Hello from GAMAD Node.js template!"}));
}).listen(port, () => console.log(`Server running on port ${port}`));
