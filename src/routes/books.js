import express from 'express';

const router = express.Router();

router.get('/search', (req, res) => {
  res.json({
    books: [
      {
        goodreadsId: 1,
        title: '1984',
        authors: 'Orwell',
        covers: ['https://images.gr-assets.com/books/13489905661/5470.jpg'],
        pages: 198
      }
    ]
  });
});

export default router;
