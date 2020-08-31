import React from 'react';
import Planos from './pages/Planos/Planos'
import Home from './pages/Home/Home'
import Details from "./pages/Details/Details";
import './App.css';
import Navbar from "./pages/commons/Navbar";
import {Route, Switch} from 'react-router-dom'


function App() {
    return (
        <div className="App">
            <Navbar/>

            <header className="App-header">
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/Planos/:idPlano' component={Details}/>
                    <Route exact path='/Planos' component={Planos}/>
                    <Route component={Error}/>
                </Switch>
            </header>
        </div>
    );
}

export default App;
