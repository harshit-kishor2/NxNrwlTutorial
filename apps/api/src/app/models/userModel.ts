import { Schema, Document,model } from 'mongoose';

export interface userType extends Document{
    name: string,
    email: string,
    password: string,
    isAdmin:boolean,
}

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, dropDups: true },
  password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true, default: false },
  date:{type:Date,deafult:Date.now()}
});

const userModel = model<userType>("User", userSchema);

export default userModel;