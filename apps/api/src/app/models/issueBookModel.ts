import { Schema, Document,model } from 'mongoose';

export interface issueBookType extends Document{
    bookId: string,
    userId: string,
    bookStatus: string,
    issueDate: string,
    returnDate:string
}

const issueBookSchema = new Schema({
  bookId: { type: Schema.Types.ObjectId,ref:"Book" },
  userId: { type: Schema.Types.ObjectId,ref:"User" },
  bookStatus:{type:String ,default:''},
  issueDate: { type: String},
  returnDate: { type: String },
});

const issueBookModel = model<issueBookType>("IssueBook", issueBookSchema);

export default issueBookModel;