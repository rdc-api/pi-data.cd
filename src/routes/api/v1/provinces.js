import express from 'express';
import { celebrate } from 'celebrate';
import { ProvinceController } from '../../../controllers';
import { asyncHandler, checkProvince } from '../../../middlewares';

const router = express.Router();

router.get('/', asyncHandler(ProvinceController.getAll));

router.get('/:nom',
  checkProvince, 
  asyncHandler(ProvinceController.getOne)
);

export default router;
