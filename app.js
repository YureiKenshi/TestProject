const http = require("http");

const server = http.createServer((reg, res) => {
    if (reg.url === "/") {
        res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
        res.end("Главная страница");
    } else if (reg.url === "/about") {
        res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
        res.end("Обо мне");
    } else if (reg.url === "/contacts") {
        res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
        res.end("Контакты: muspaevo@gmail.com");
    } else {
        res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
        res.end("Страница не найдена");
    }
});
server.listen(3000, () => {
    console.log("Сервер запущен: http://localhost:3000");
});