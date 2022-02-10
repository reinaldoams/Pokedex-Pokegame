import { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

class Navbar extends Component {
    render() {
        return (
            <nav className='Navbar'>
                <Link className='navBarLink' to="/pokedex">Pokedex</Link>
                <Link className='navBarLink homepage-link' to="/">Home</Link>
                <Link className='navBarLink' to="/pokegame">Pokegame</Link>
            </nav>
        )
    }
}

export default Navbar;