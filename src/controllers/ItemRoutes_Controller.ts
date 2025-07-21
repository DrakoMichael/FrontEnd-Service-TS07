import express, { Request, Response } from 'express';

export class itemRoutes {
  getItems(req: Request, res: Response) {
    console.log('Teste rota...');
    return res.status(200).send('teste rota sucesso');
  }
}