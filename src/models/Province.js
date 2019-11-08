import { Schema, model } from 'mongoose';

const ProvinceSchema = new Schema({
  nom: {
    type: String,
  },
  chefLieu: {
    type: String,
  },
  langue: {
    type: String,
  },
  superficie: { // en km2
    type: Number,
  },
  population: {
    type: Number,
  }
});

export default model('Province', ProvinceSchema);
