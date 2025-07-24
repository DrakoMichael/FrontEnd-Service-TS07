"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ItemRoutes_Controller_1 = require("./controllers/ItemRoutes_Controller");
require('dotenv').config();
const port = Number(process.env.PORT) || 3000;
const app = (0, express_1.default)();
app.use(ItemRoutes_Controller_1.routerController);
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
