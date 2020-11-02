import React from 'react'
import { useSelector } from 'react-redux'
import TableData from '../../UserComponent/user-profile/TableData'
const SearchIssueBooks = (props) => {

    return (
        <div>
            {props.issueBookInfo && props.issueBookInfo.map(books =>
                books.bookStatus == "Issued" && props.filter == "Issued" ?
                    <TableData book={books} />
                    : books.bookStatus == "Returned" && props.filter == "Returned" ?
                        <TableData book={books} />
                        :
                        books.bookStatus == "Requested" && props.filter == "Requested" ?
                            <TableData book={books} />
                            :
                            books.bookStatus && props.filter == "All" ?
                                <TableData book={books} />
                                : <></>
            )}
        </div>
    )
}

export default SearchIssueBooks