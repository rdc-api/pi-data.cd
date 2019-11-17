import express from 'express';
import posts from './posts';
import Entreprise from '../../../models/Entreprise';

const router = express.Router();

router.use('/posts', posts);
//route pour recupérer les entreprises
router.get("/entreprises",(req,resp)=>{
    Entreprise.find((err,entreprises)=>{
       if(err) resp.status(500).send(err)
       else resp.send(entreprises);
    });
   });
export default router;
