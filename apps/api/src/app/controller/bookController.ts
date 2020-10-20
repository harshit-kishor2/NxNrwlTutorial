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
    Book.find()
    .then(books=>res.send(books))    
}
//========================================================================================================
export const removeBookController = (req,res) => {
    
}

//========================================================================================================
export const updatetBookController = (req,res) => {
    
}

//========================================================================================================
export const searchBookController = (req,res) => {
    
}