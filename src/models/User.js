import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

// TODO: add uniqueness and email validation to email field
const schema = new mongoose.Schema(
  {
    email: { type: String, required: true, lowercase: true, index: true },
    passwordHash: { type: String, required: true },
  },
  { timestamps: true },
);

schema.methods.isValidPassword = function isValidPassword(password) {
  return bcrypt.compareSync(password, this.passwordHash);
};

schema.methods.checkPass = function checkPass() {
  return console.log(this.passwordHash);
};

export default mongoose.model('User', schema);
