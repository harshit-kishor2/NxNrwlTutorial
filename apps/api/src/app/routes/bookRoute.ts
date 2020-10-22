import { updatetBookController, getBookController, removeBookController, searchBookController, getOneBookController } from './../controller/bookController';
import { requireLogin, isAdmin } from './../utils/util';
import {
    addBookController
} from '../controller/bookController'

export const bookRoute = (app) => {
   
    app.post("/api/admin/add-book",requireLogin,isAdmin,addBookController)
//========================================================================================================
    
    app.put("/api/admin/edit-book",requireLogin,isAdmin,updatetBookController)
//========================================================================================================

    app.delete("/api/admin/delete-book/:id",requireLogin,isAdmin,removeBookController)
//========================================================================================================

    app.get("/api/search-book",searchBookController)
//========================================================================================================

    app.get("/api/get-all-books",getBookController)
//========================================================================================================
    
    app.get("/api/get-one-book/:id", getOneBookController)
//========================================================================================================


}