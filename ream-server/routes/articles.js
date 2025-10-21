import express from 'express';
const router = express.Router();

let cards = [
  { id: 1, title: 'Express.js', summary: 'Fast Node.js framework', favorite: false },
  { id: 2, title: 'React', summary: 'UI library for building interfaces', favorite: true },
];

router.get('/', (req, res) => {
  res.json(cards);
});
export default router;