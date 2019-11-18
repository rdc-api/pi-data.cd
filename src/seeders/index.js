import 'dotenv/config';
import { logger } from '../helpers';
import { connectDb, Province ,Entreprise,Touristic } from '../models';
import provinces from './provinces';
import entreprise from './entreprise';
import touristic from './touristic';


const exitProcess = (code = 0) => {
  logger.info('Seeding ended!');
  process.exit(code);
};

connectDb()
  .then(() => {
    logger.info('Seeding started!');
    Province.insertMany(provinces, (err, province) => {
      if (err) {
        exitProcess(1);
      };
      exitProcess();
    });
    Entreprise.insertMany(entreprise,(err, entreprise)=>{
      if(err){
        exitProcess(1);
      }
      exitProcess();
    });
    Touristic.insertMany(touristic,(err, touristic)=>{
      if(err){
        exitProcess(1);
      }
      exitProcess();
    });
  })
  .catch(err => {
    logger.error(`Failed! ${err.message}`);
    process.exit();
  });
