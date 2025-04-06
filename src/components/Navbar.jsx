import '../css/navbar.css';
import logoSVG from '../assets/logo.svg'

import { Link } from "react-router-dom";

export default function Navbar() {


    return (
        <>
        <div className='navbar-div'>
        <nav>
            <Link to="/">
            <img id='logo-img' src={logoSVG}></img>
            </Link>
          <div id='brand-text'>
            <h1><span>VM</span> WOODWORKS </h1>
            <div>
            <p id='motto'>Kitchens and Cabinets | 267-379-3140</p>
            </div>
          </div>
        </nav>
        <div id='nav-links-menu'>
            <ul>
                <li>Portfolio</li>
                <li>About</li>
                <li>Placeholder</li>
                <li>Placeholder</li>
                <Link to='/contact' className='links'>
                <li>Contact</li>
                </Link>
            </ul>
        </div>
        </div>
        </>
    )
}