import '../App.css';
import React from 'react'

function HeaderMenu(){
    return(
        <header className=''>
            <nav className='menuNavContainer'>
                <a href='#aboutSec' className='linkStyle'>About</a>
                <a href='#menuSec' className='linkStyle'>Menu</a>
                <a href='#locationSec' className='linkStyle'>Location</a> 
                <a href='#contactSec' className='linkStyle'>Contacts</a>
            </nav>
        </header>
    )
}
export default HeaderMenu