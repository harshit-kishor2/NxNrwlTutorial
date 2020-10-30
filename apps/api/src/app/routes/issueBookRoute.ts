import {
    deleteIssueBookController,
    getIssueBookController,
    issueBookController,
    updateIssueBookController,
    
} from '../controller/issueBookController';
import {
    requireLogin,
    isAdmin
} from './../utils/util';


export const issueBookRoute = (app) => {
   
    app.post("/api/issue-book",requireLogin,issueBookController)
//========================================================================================================
    app.get("/api/issue-book/:userId",requireLogin,getIssueBookController)
//========================================================================================================
    app.get("/api/issue-book",requireLogin,isAdmin,getIssueBookController)
//========================================================================================================
    app.delete("/api/remove-issue-book/:bookId",requireLogin,deleteIssueBookController)
//========================================================================================================
    app.put("/api/admin/update-issue-book/:bookId",requireLogin,updateIssueBookController)
//========================================================================================================
}