import express, { json } from 'express';
import dbConnectSet from './interfaces/dbConnectSet_interface';
import { itemRoutes } from './interfaces/ItemRoutes_interface';
const port: number = 3000;
const app = express();

const dbConfig: dbConnectSet = {
    hostname: 'localhost',
    port: 5432,
    username: 'user',
    password: 'password',
    database: 'mydb'
};

app.use(express.json());

const itemRoute = new itemRoutes();

app.get('/', itemRoute.getItems);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
