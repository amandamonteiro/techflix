import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/image/Logo.png';
import Button from '../Button/index';
import './style.css';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="LogoAmandaFlix" />
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video"> 
            Novo vídeo
            </Button>
        </nav>
    )
}

export default Menu;