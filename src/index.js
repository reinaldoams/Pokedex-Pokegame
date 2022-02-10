import reactDom from 'react-dom';
import { Component } from 'react';
import Pokecard from './Pokecard';
import Pokedex from './Pokedex';
import Pokegame from './Pokegame';
import Homepage from './Homepage';
import Navbar from './Navbar'
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/pokedex" element={<Pokedex />} />
                    <Route path="/pokegame" element={<Pokegame />} />              
                </Routes>
            </BrowserRouter>
        )
    }
}

reactDom.render(<App />, document.getElementById('root'))