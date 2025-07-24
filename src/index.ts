import express from 'express';
import Router from './controllers/ItemRoutes_Controller';
import 'dotenv/config'

const port = process.env.PORT;
const app = express();

app.use(Router);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
