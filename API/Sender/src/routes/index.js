import express from 'express';
// import analyze from '../service/analyze';

const router = express.Router();

router.get('/',  (req, res) => {
  res.json('confirm');
});

module.exports = router;

