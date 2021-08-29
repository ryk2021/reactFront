import loans from "../services/loans"
import book from "../services/book"
import React, { useState } from 'react'
import { Row } from "react-bootstrap"
const TableBooks = ({index,loans,...props}) => {  
  const [loaned, setLoaned] = useState({}) 
  const [allList, setAllList] = useState({})   
  
   book.getById(loans.idBook).then(req => {        
    return  setLoaned({
        id : req._id,
        title: req.title,
        genre: req.genre,
        author: req.author,
        dateEnd :loans.dateEnd,
        dateStart : loans.dateStart,
        status : loans.status===0?"NO":"YES"
    })
  })   
  

  
    return(        
      <tr>
      <th scope="row">{index}</th>
      <td>{loaned.id}</td>
      <td>{loaned.title}</td>
      <td>{loaned.genre}</td>
      <td>{loaned.author}</td>
      <td>{loaned.dateStart}</td>
      <td>{loaned.dateEnd}</td>
      <td>{loaned.status}</td>
    </tr>)
    
  } 
  
export default TableBooks