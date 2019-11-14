import { Province } from '../models';
import { statusCodes, responseMessages } from '../constants';

const checkProvince = async (req, res, next) => {
  const { nom } = req.params;

  const province = await Province.findOne({ nom }).select('-__v');

  if (!province) {
    return res.status(statusCodes.NOT_FOUND).json({
      status: statusCodes.NOT_FOUND,
      message: responseMessages.notExist('Province'),
    });
  }

  req.province = province;

  next();
}

export default checkProvince;