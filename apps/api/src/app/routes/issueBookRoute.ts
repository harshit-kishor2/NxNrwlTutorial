import {
    getIssueBookController,
    issueBookController
} from '../controller/issueBookController';
import {
    requireLogin,
} from './../utils/util';


export const issueBookRoute = (app) => {
   
    app.post("/api/issue-book",requireLogin,issueBookController)
//========================================================================================================
    app.get("/api/issue-book/:userId",requireLogin,getIssueBookController)
//========================================================================================================
    
}