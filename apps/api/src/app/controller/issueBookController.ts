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
        }else if (issueBooks && issueBooks.bookStatus=="Issued") {
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
            .populate('userId')
        .then(issueBook=>res.send(issueBook))       
    }
    else {
        IssueBook.find()
            .populate('bookId')
            .populate("userId")
        .then(issueBook=>res.send(issueBook))
    }
}
//========================================================================================================
export const deleteIssueBookController = async (req, res) => {
    const bookId = req.params.bookId
     const book = await IssueBook.findById(bookId);
    if (book) {
    await book.remove();
    res.send({ msg: "Product Deleted" });
  } else {
    res.send("Error in Deletion.");
  }
}
//========================================================================================================
export const updateIssueBookController = async (req, res) => {
    const bookId = req.params.bookId
    const book = await IssueBook.findById(bookId);
   // console.log(book)
    if (book && book.bookStatus=='Issued') {
     book.bookStatus = "Returned"
        book.returnDate = new Date(Date.now()).toLocaleString().slice(0,10)
        const updateBook = await book.save()
        if (updateBook) {
            return res.status(200).send({ msg: "Successfully updated" });
        }
  }else if(book && book.bookStatus=='Requested' ) {
        book.bookStatus = "Issued"
        book.issueDate = new Date(Date.now()).toLocaleString().slice(0,10)
        book.returnDate= new Date(Date.now()+(7*24*3600*1000)).toLocaleString().slice(0,10)
        const updateBook = await book.save()
        if (updateBook) {
            return res.status(200).send({ msg: "Successfully updated" });
        }
    } else {
        console.log("error")
  }
}