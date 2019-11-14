import express from 'express';
import provinces from './provinces';

const router = express.Router();

router.use('/provinces', provinces);

export default router;
