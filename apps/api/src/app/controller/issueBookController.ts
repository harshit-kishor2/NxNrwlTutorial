import IssueBook from '../models/issueBookModel'
//========================================================================================================
export const issueBookController =async (req, res) => {
    const { BookId, userId } = req.body
    if (BookId && userId) {
        const issueBooks = await IssueBook.findOne({
            $and:
                [
                    { userId },
                    { bookId: BookId }
                ]
        })
        if (issueBooks && issueBooks.bookStatus=="Requested") {
            res.status(400).send({msg:"Already requested for this book"})
        }else if (issueBooks && issueBooks.bookStatus=="Issued" && !null) {
            res.status(400).send({msg:"Already issued this book"})
        }
        else {
       const newIssueBook = new IssueBook({
        bookId:BookId,
        userId: userId,
        bookStatus:"Requested"
         })
            const newBook = await newIssueBook.save()
            if (newBook) {
                res.send("Successfully requested..")
            }
            else {
                res.status(400).send({msg:"Some error"})
            }
        }
    }
    
}
//========================================================================================================
export const getIssueBookController = (req, res) => {
    const userId = req.params.userId
    if (userId) {
        IssueBook.find({ userId })
            .populate('bookId')
        .then(issueBook=>res.send(issueBook))       
    }
    else {
         IssueBook.find()
        .then(issueBook=>res.send(issueBook))
    }
}

//========================================================================================================