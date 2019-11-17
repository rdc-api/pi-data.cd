import { Schema, model } from 'mongoose';

const EntrepriseSchema = new Schema({
  type: {
    type: String,
  },
  nom: {
    type: String,
  },
  ville: {
    type: String,
  }
});

export default model('Entreprise', EntrepriseSchema);
