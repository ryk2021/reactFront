import { React } from "react";
import { BrowserRouter,Switch,Route } from "react-router-dom";
import App from "../App";
import Library from "../pages/Library"

const Router = () => {

    return(
            
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App}></Route>
                <Route exact path="/library" component={Library}></Route>
            </Switch>        
        </BrowserRouter>
    )

}


export default Router