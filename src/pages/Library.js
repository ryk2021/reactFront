import '../App.css'
import React, { useState, useEffect } from 'react'
import loans from '../services/loans'
import book from '../services/book'
import TableBooks from '../Componets/TableBooks'
import BooksByUser from  '../Componets/BooksByUser'

import { BrowserRouter as Router,Redirect, Route,Switch,useHistory} from "react-router-dom"
const App = () => {
    const [user, setUser] = useState(null)   
    const [statusLoans, setStatusLoans] = useState([]) 
    const [books, setBooks] = useState([]) 
    const [detailLoans, setDetailLoans] = useState([]) 

    
    
    useEffect(() => {   
         

        if (!window.localStorage.getItem('loggedUser')) {          
          window.location.href='/'
        }
        else{
          const infuser = JSON.parse(window.localStorage.getItem('loggedUser'))[0] 
          setUser(infuser)           
          book.getAll().then(request =>{                  
            return setBooks(request)
          }).catch(erro => {
            setBooks([])
          })
          loans.getById(infuser._id).then(resquest =>{  
                                                                       
                  return setDetailLoans(resquest)                                    
                })
                .catch(err => console.error(err))               
        }
      }, [])      

      const inf  =  user==null?null:user.fname;        

      const logOut  = () =>{
        window.localStorage.clear();
        window.location.href='/'        
      }

    

    return ( <div className="App">
                <header className="App-header">   
                    <div>Welcome to Library</div>
                    <button type="button" onClick={logOut} className="btn btn-outline-danger">Log Out</button>                    
                    <br/>{inf}  
                    <h1>All books</h1>
                    <table className="table table-dark">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">_id</th>
                            <th scope="col">Title</th>
                            <th scope="col">Genre</th>
                            <th scope="col">author</th>
                            <th scope="col">Year of publication</th>
                            <th scope="col">Amount</th>
                            <th scope="col">loaned</th>
                          </tr>
                          </thead>
                        <tbody>
                          {
                            books.map((x,i)=>{                              
                                 return <TableBooks
                                index = {(i + 1)}
                                _id = {x._id}
                                title = {x.title}
                                genre = {x.genre}
                                author = {x.author}
                                year = {x.year}
                                amount = {x.amount}/>
                                 
                            })
                          }
                        </tbody>
                    </table>      

                   <h1>Detail of books loaned</h1>

                    <table className="table table-dark">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">_id</th>
                            <th scope="col">Title</th>
                            <th scope="col">Genre</th>
                            <th scope="col">author</th>
                            <th scope="col">Date of Loan</th>
                            <th scope="col">date of return</th>                            
                            <th scope="col">returned</th>
                          </tr>
                          </thead>
                        <tbody>
                          {
                            detailLoans.map((x,i)=>{   
                                                         
                            return   <BooksByUser
                                index = {(i + 1)}
                                loans = {x}
                                props = {books}
                                />
                                
                                                              
                                })                                
                          }
                        </tbody>
                    </table>         
                    
                </header>
            </div>
    )
}


export default App;
