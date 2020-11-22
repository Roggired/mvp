import "normalize.css"
import React from "react"
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Personal from "./pages/personal/Personal";
import Enterprise from "./pages/enterprise/Enterprise";


class App extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/mvp" component={Personal} />
                        <Route exact path="/mvp/enterprise" component={Enterprise} />
                    </Switch>
                </BrowserRouter>
            </>
        );
    }
}

export default App;
