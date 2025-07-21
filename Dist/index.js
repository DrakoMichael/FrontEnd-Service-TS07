"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const port = 3000;
const app = (0, express_1.default)();
let statusServer = true;
const dbConfig = {
    hostname: 'localhost',
    port: 5432,
    username: 'user',
    password: 'password',
    database: 'mydb'
};
app.use(express_1.default.json());
app.get('/', (req, res) => {
    if (!statusServer) {
        res.status(503).send('Service Unavailable');
    }
    if (req.query.token !== "secret") {
        return res.send("error: Unauthorized");
    }
    res.send('Hello, World!');
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
