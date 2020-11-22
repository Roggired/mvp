import "normalize.css"
import React from "react"
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Personal from "./pages/personal/Personal";
import Enterprise from "./pages/enterprise/Enterprise";


class App extends React.Component{
    constructor(props) {
        super(props);
    }

    //govno

    render() {
        return (
            <>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Personal} />
                        <Route exact path="/enterprise" component={Enterprise} />
                    </Switch>
                </BrowserRouter>
            </>
        );
    }
}

export default App;
