import 'dotenv/config';
import { logger } from '../helpers';
import { connectDb, Province ,Entreprise } from '../models';
import provinces from './provinces';
import entreprise from './entreprise';


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
  })
  .catch(err => {
    logger.error(`Failed! ${err.message}`);
    process.exit();
  });
