// app.js
console.log("Xin chào, đây là chương trình Node.js đầu tiên của bạn!");

// Một ví dụ nhỏ: tạo server HTTP
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello from Node.js Server!");
});

server.listen(3000, () => {
  console.log("Server đang chạy tại: http://localhost:3000");
});
