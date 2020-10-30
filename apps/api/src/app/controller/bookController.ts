import Book from '../models/bookModel'
//========================================================================================================
export const addBookController = (req,res) => {
    const { name, author, description, items, imageurl } = req.body
    const newBook = new Book({
        bookName:name,
        authorName:author,
        description,
        items,
        imageurl
    })
    newBook.save()
    .then(newBook => res.send({ msg: "Successfully added" }))
    .catch(err=>res.status(400).send({msg:"Some error"}))
}

//========================================================================================================
export const getBookController = (req, res) => {
    const keyword = req.params.SearchKeyword
    if (keyword) {
        Book.find({
            $or: [
                { bookName: new RegExp(keyword, 'i') },
                { authorName: new RegExp(keyword, 'i') }
               ]
        })
       .then(books=>res.send(books))    
    
    } else {
    Book.find()
    .then(books=>res.send(books))    
    }

}
//========================================================================================================
export const getOneBookController = (req, res) => {
    const id = req.params.id
    Book.findOne({ _id: id })
    .then(book=>res.send(book))
}
//========================================================================================================
export const removeBookController = async (req, res) => {
    const id = req.params.id
     const book = await Book.findById(id);
  if (book) {
    await book.remove();
    res.send({ msg: "Product Deleted" });
  } else {
    res.send("Error in Deletion.");
  }
    
}

//========================================================================================================
export const updatetBookController = async(req, res) => {
     const { id,name, author, description, items, imageurl } = req.body
    const book = await Book.findById({ _id: id })
    if (book) {
        book.bookName = name
        book.authorName = author
        book.description = description
        book.items = items
        book.imageurl = imageurl
        const updateBook = await book.save()
        if (updateBook) {
            return res.status(200).send({ msg: "Successfully updated" });
        }
    }
    
}

//========================================================================================================
export const searchBookController = (req,res) => {
    
}