import express from 'express';
import authenticate from '../middlewares/authenticate';

const router = express.Router();
router.use(authenticate);

router.get('/search', (req, res) => {
  res.json({
    books: [
      {
        goodreadsId: 1,
        title: '1984',
        authors: 'Orwell',
        covers: [
          'https://ozon-st.cdn.ngenix.net/multimedia/1011499468.jpg',
          'https://img1.labirint.ru/books/419735/big.jpg'
        ],
        pages: 198
      },
      {
        goodreadsId: 2,
        title: '1994',
        authors: 'Orwell',
        covers: ['https://images.gr-assets.com/books/13489905661/5470.jpg'],
        pages: 198
      }
    ]
  });
});

export default router;
