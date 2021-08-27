import './App.css'
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router,Redirect, Route,Switch,useHistory} from "react-router-dom"

const App = () => {
let history = useHistory()

    const profile = ({authorized}) =>{

        debugger
        if(!authorized){
            return<Redirect to="/app" />
        }
    
        return <div>Welcome to Library</div>
    }
    
    return ( <div className="App">
                <header className="App-header">   
                    <div>Welcome to Library</div>
                </header>
            </div>
    )
}


export default App;
