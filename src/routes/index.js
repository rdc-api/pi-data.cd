import express,{Request,Response} from 'express';
import api from './api';
import Entreprise from '../models/Entreprise';


const router = express.Router();

router.use('/api', api);
export default router;
