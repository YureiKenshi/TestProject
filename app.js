const http = require("http");

const server = http.createServer((reg, res) => {
    if (reg.url === "/") {
        file = "index.html";
    } else if (reg.url === "/about") {
        file = "about.html";
    } else if (reg.url === "/contacts") {
        file = "contacts.html";
    } else {
        res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
        res.end("<h1>Страница не найдена</h1>");
        return;
    }
    fs.readFile(file, (err, data) => {
        if (err) {
            res.writeHead(500, { "Content-Type": "text/html; charset=utf88" });
            res.end("<h1>Ошибка сервера</h1>");
        } else {
            res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
            res.end(data);
        }
    });
});
server.listen(3000, () => {
    console.log("Сервер запущен: http://localhost:3000");
});