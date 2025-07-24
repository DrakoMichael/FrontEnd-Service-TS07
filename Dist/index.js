"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ItemRoutes_Controller_1 = require("./controllers/ItemRoutes_Controller");
const routes_enum_1 = require("./interfaces/routes_enum");
const port = 3000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(routes_enum_1.routes.GET_ALL_ITEMS, ItemRoutes_Controller_1.itemRoutes);
app.use(routes_enum_1.routes.GET_ITEM_PER_ID, ItemRoutes_Controller_1.itemRoutes);
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
