import 'dotenv/config';
import { logger } from '../helpers';
import { connectDb, Province } from '../models';
import provinces from './provinces';

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
  })
  .catch(err => {
    logger.error(`Failed! ${err.message}`);
    process.exit();
  });
