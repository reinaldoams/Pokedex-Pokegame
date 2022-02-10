import { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokegame.css'

class Pokegame extends Component {
    static defaultProps = {
        pokemonList: [
            { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
            { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
            { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
            { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
            { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
            { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
            { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
            { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
        ]
    }

    render() {
        let handOne = []
        let handTwo = []
        let initialListOfIds = []
        this.props.pokemonList.map(
            pokemon => initialListOfIds.push(pokemon)
        )
        while (initialListOfIds.length > 0) {
            const index = Math.floor(Math.random() * initialListOfIds.length)
            if (initialListOfIds.length > 4) {
                handOne.push(initialListOfIds[index])
            } else {
                handTwo.push(initialListOfIds[index])
            }
            initialListOfIds.splice(index, 1)
        }
        let handOneScore = 0
        let handTwoScore = 0
        handOne.map(pokemon => (
            handOneScore += pokemon.base_experience
        ))
        handTwo.map(pokemon => (
            handTwoScore += pokemon.base_experience
        ))

        const handOneIsWinner = (handOneScore > handTwoScore);
        const handOneClass = handOneIsWinner ? 'winnerClass' : 'loserClass';
        const handTwoClass = !handOneIsWinner ? 'winnerClass' : 'loserClass';

        const handOneToRender = handOne.map(pokemon => (
            (<Pokecard
                id={pokemon.id}
                name={pokemon.name}
                type={pokemon.type}
                xp={pokemon.base_experience}
            />)
        ))
        const handTwoToRender = handTwo.map(pokemon => (
            (<Pokecard
                id={pokemon.id}
                name={pokemon.name}
                type={pokemon.type}
                xp={pokemon.base_experience}
            />)
        ))
        const winnerText = 'Winner!!'
        const loserText = 'Loser!!'
        return (
            <div className='Pokegame'>
                <h1 className='handTitle'>Hand One</h1>
                <div className='scoreDiv'>Points: <span className='scoreText'>{handOneScore}</span>
                <span className={`winnerTextSpan ${handOneClass}`}>
                    {handOneIsWinner ? winnerText : loserText}
                </span></div>
                <div className='gameCards'>
                    {handOneToRender}
                </div>
                <h1 className='handTitle'>Hand Two</h1>
                <div className='scoreDiv'>Points: <span className='scoreText'>{handTwoScore}</span>
                <span className={`winnerTextSpan ${handTwoClass}`}>
                    {!handOneIsWinner ? winnerText : loserText}
                </span></div>
                <div className='gameCards'>
                    {handTwoToRender}
                </div>
            </div>
        )
    }
}

export default Pokegame