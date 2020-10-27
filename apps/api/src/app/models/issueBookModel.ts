import { Schema, Document,model } from 'mongoose';

export interface issueBookType extends Document{
    bookId: string,
    userId: string,
    bookStatus: string,
    issueDate: Date,
    returnDate:Date
}

const issueBookSchema = new Schema({
  bookId: { type: String },
  userId: { type: String },
  bookStatus:{type:String},
  issueDate: { type: Date},
  returnDate: { type: Date },
});

const issueBookModel = model<issueBookType>("IssueBook", issueBookSchema);

export default issueBookModel;