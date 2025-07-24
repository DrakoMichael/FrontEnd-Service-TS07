import express, { json } from 'express';
import { itemRoutes } from './controllers/ItemRoutes_Controller';
import { routes } from './interfaces/routes_enum';


const port: number = 3000;
const app = express();

app.use(express.json());

app.use(routes.GET_ALL_ITEMS, itemRoutes);
app.use(routes.GET_ITEM_PER_ID, itemRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
