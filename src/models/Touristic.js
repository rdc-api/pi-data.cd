import { Schema, model } from 'mongoose';

const TouristicSchema = new Schema({
  nom: {
    type: String,
  },
  ville: {
    type: String,
  }
});

export default model('Touristic', TouristicSchema);