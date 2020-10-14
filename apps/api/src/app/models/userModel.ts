import { Schema, Document,model } from 'mongoose';

export interface userType extends Document{
    name: string,
    email: string,
    password: string,
    isAdmin:boolean,
}

const userSchema = new Schema({
  name: { type: String },
  googleId: { type: String },
  facebookId:{type:String},
  email: { type: String},
  password: { type: String },
  isAdmin: { type: Boolean, default: false },
  date:{type:Date,deafult:Date.now()}
});

const userModel = model<userType>("User", userSchema);

export default userModel;