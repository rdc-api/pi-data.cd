import express,{Request,Response} from 'express';
import api from './api';


const router = express.Router();

router.use('/api', api);
export default router;
