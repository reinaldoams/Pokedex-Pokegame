import "./Pokecard.css"
const { Component } = require('react');

class Pokecard extends Component {
    render() {
        let correctedId = String(this.props.id)
        while (correctedId.length < 3) {
            correctedId = 0 + correctedId;
        }
        return (
            <div key={this.props.id} className='Pokecard'>
                <div className='pokemon-img'>
                <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${correctedId}.png`} />
                </div>
                <p>name: {this.props.name}</p>
                <p>type: {this.props.type}</p>
                <p>xp: {this.props.xp}</p>
            </div>
        )
    }
}

export default Pokecard;