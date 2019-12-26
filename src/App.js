import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Layout from "./components/Layout/Layout";
import Content from "./container/Contants/Content";
import Edit from "./container/Edit/Edit";


function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route path="/" exact component={Content}/>
                    <Route path="/pages/:name" exact component={Content}/>
                    <Route path="/edit" exact component={Edit}/>
                    <Route render={() => <h1>Not Fount</h1>}/>
                </Switch>
            </Layout>
        </BrowserRouter>

    );
}


export default App;
