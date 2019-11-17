import express,{Request,Response}  from 'express';
import morgan from 'morgan';
import cors from 'cors';
import http from 'http';
import 'dotenv/config';
import swaggerUI from 'swagger-ui-express';
import YAML from 'yamljs';
import passport from 'passport';
import badyParser from 'body-parser';
import webPush from 'web-push';
import joiErrors from './middlewares/joiErrors';
import logger from './helpers/logger';
import { connectDb } from './models';
import routes from './routes';

const isProd = process.env.NODE_ENV === 'production';
const app = express();
const swaggerYAMLDocs = YAML.load('./docs/swagger.yml');

connectDb()
  .then(async () => {
    logger.info('Mongodb connected');
  })
  .catch(error => {
    logger.info('Could not connect to Mongodb', error);
  });

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan(isProd ? 'combined' : 'dev'));
app.use(routes);
app.use(joiErrors());
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerYAMLDocs));
app.use(badyParser.json());
if (isProd) {
  app.use((req, res) => {
    const status = 404;
    res.status(status).json({
      message: 'Not found',
      status,
    });
  });

  app.use((err, req, res) => {
    const status = err.status || 500;
    res.status(status).json({
      errors: {
        message: err.message,
        status,
      },
    });
  });
}

export default app;
