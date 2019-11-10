import { Schema, model } from 'mongoose';

const VilleSchema = new Schema({
  nom: {
    type: String,
  },
  Province: {
    type: Schema.Types.ObjectId,
    ref: 'Province',
  },
  population: {
    type: Number,
  }
});

export default model('Ville', VilleSchema);
