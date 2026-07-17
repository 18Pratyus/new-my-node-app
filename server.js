const http = require("http");



const server = http.createServer((req, res) => {

    res.writeHead(200, { "Content-Type": "text/html" });

    res.end("<h2>Hello ! This is Pratyus from Node.js and  have successfully implemnented GithuACtion CI/CD. 🚀</h2>");

});



server.listen(3000, () => {

    console.log("Server running on port 3000");

});