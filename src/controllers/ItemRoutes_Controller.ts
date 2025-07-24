import express, { Request, Response } from 'express';
import { routes } from '../interfaces/routes_enum';

const Router = express.Router();

Router.get(routes.GET_ALL_ITEMS, (req: Request, res: Response) => {
    try {
        // Simulate fetching items from a database
        const items = [
            { id: 1, name: 'Item 1' },
            { id: 2, name: 'Item 2' },
        ];
        return res.status(200).json(items);
    } catch (error) {
        console.error('Error fetching items:', error);
        return res.status(500).send('Internal Server Error');
    }
});

Router.post(routes.CREATE_ITEM, (req: Request, res: Response) => {
    const newItem = req.body;
    try {
        // Simulate creating a new item
        const createdItem = { id: Date.now(), newItem };
        return res.status(201).json({ createdItem });
    } catch (error) {
        console.error('Error creating item:', error);
        return res.status(500).send('Internal Server Error');
    }
});

Router.get(routes.GET_ITEM_PER_ID, (req: Request, res: Response) => {
    const itemId = req.params.id;
    try {
        // Simulate fetching a single item by ID
        const item = { id: itemId, name: `Item ${itemId}` };
        return res.status(200).json(item);
    } catch (error) {
        console.error(`Error fetching item with ID ${itemId}:`, error);
        return res.status(500).send('Internal Server Error');
    }
});
export const itemRoutes = Router;


