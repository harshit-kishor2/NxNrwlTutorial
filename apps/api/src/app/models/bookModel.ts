import { Schema, Document,model } from 'mongoose';

export interface bookType extends Document{
    bookName: string,
    authorName: string,
    description: string,
    items: number,
    imageurl:string
}

const bookSchema = new Schema({
  bookName: { type: String },
  authorName: { type: String },
  description:{type:String},
  items: { type: Number},
  imageurl: { type: String },
});

const bookModel = model<bookType>("Book", bookSchema);

export default bookModel;