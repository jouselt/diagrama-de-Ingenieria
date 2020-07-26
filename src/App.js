import React from 'react';
import plano1 from './assets/plano_1.svg'
import Plano from './components/Plano'
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Plano src={plano1}/>
            </header>
        </div>
    );
}

export default App;
