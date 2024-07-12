import mongoose from "mongoose";

export interface IUser {
  _id: string;
  name: string;
  email: string;
  gender: string;
  age: string;
}

const userSchema = new mongoose.Schema({
  name: { type: String, required: true},
  email: { type: String, required: true, unique: true},
  gender: { type: String, required: true},
  age: { type: String, required: true}
})

const UserModel = mongoose.model<IUser>('User', userSchema);

export default UserModel

