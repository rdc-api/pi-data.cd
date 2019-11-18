import express from 'express';
import posts from './posts';
import Entreprise from '../../../models/Entreprise';
import Touristic from '../../../models/Touristic';

const router = express.Router();

router.use('/posts', posts);
//route pour recupérer les entreprises
router.get("/entreprises",(req,resp)=>{
    Entreprise.find((err,entreprises)=>{
       if(err) resp.status(500).send(err)
       else resp.send(entreprises);
    });
   });
   // router pour get tsite touristique
   router.get("/sites",(req,resp)=>{
      Touristic.find((err,touristics)=>{
         if(err) resp.status(500).send(err)
         else resp.send(touristics);
      });
     });
export default router;
