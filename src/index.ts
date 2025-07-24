import express from 'express';
import { routerController } from './controllers/ItemRoutes_Controller';
require('dotenv').config();


const port = Number(process.env.PORT) || 3000;
const app = express();

app.use(routerController);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
