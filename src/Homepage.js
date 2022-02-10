import { Component } from 'react';
import './Homepage.css'

class Homepage extends Component {
    render() {
        return (
            <div className='Homepage'>
            <h1>Pokemon Project</h1>
            <h2>Choose Pokedex to see all pokemons available</h2>
            <h2>Choose Pokegame to get 2 random hands with 4 pokemons, with one being the winner!</h2>
            </div>
        )
    }
}

export default Homepage;