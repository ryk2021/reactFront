import loans from "../services/loans"
import React, { useState } from 'react'
import { Row } from "react-bootstrap"
const TableBooks = ({index,_id,title,genre,author,year,amount}) => {  
  const [loaned, setLoaned] = useState(0) 
  loans.getByIdBook(_id)
    .then(req =>setLoaned(req.length))
    
  
    return(        
      
      <tr>
      <th scope="row">{index}</th>
      <td>{_id}</td>            
      <td>{title}</td>
      <td>{genre}</td>
      <td>{author}</td>
      <td>{year}</td>
      <td>{amount}</td>
      <td>{loaned}</td>
    </tr>
    )
  
  
}

export default TableBooks