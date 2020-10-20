import { updatetBookController, getBookController, removeBookController, searchBookController } from './../controller/bookController';
import { requireLogin, isAdmin } from './../utils/util';
import {
    addBookController
} from '../controller/bookController'

export const bookRoute = (app) => {
   
    app.post("/api/admin/add-book",requireLogin,isAdmin,addBookController)
//========================================================================================================
    
    app.put("/api/admin/update-book",requireLogin,isAdmin,updatetBookController)
//========================================================================================================

    app.delete("/api/admin/delete-book",requireLogin,isAdmin,removeBookController)
//========================================================================================================

    app.get("/api/search-book",searchBookController)
//========================================================================================================

    app.get("/api/get-all-books",getBookController)
//========================================================================================================


}