import mongoose, { Schema, Document } from 'mongoose';

interface IUser extends Document {
  email: string;
  password: string;
  role: string;
  name: string;
  address: string;
  phoneno: number;
  resetPasswordToken?: string;
}

const UserSchema: Schema = new Schema(
    {
      email: { type: String, required: true, unique: true },
      password: { type: String, required: true },
      role: { type: String, required: true, default:'user'},
      name: { type: String, required: true },
      address: { type: String},
      phoneno: { type: Number, required: true },
      resetPasswordToken: { type: String, default:''},
    },
    { timestamps: true }
  );


const User = mongoose.model<IUser>('User', UserSchema);

export default User;

