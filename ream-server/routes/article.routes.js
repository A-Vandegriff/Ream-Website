import { Router } from 'express';

const articleRouter = Router();

articleRouter.post('/', (req, res) => res.send({ title: 'CREATE article' }));
articleRouter.get('/', (req, res) => res.send({ title: 'GET all articles'}));
articleRouter.get('/:id', (req, res) => res.send({ title: 'GET article details'}));
articleRouter.put('/:id', (req,res) => res.send({ title: 'UPDATE article'}));
articleRouter.delete('/:id', (req, res) => res.send({ title: 'DELETE article'}));
articleRouter.get('/user/:id', (req, res) => res.send( { title : 'GET all user articles' }));


export default articleRouter;