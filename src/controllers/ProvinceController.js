import { Province } from '../models';
import { statusCodes } from '../constants';

class ProvinceController {
  static async getAll (req, res) {
    const provinces = await Province.find().select('-__v -_id');
    return res.status(statusCodes.OK).json(provinces);
  }

  static async getOne (req, res) {
    const { province } = req;
    return res.status(statusCodes.OK).json(province);
  }
}

export default ProvinceController;
