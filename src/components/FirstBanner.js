import '../App.css';
import React from 'react'
import HeaderMenu from '../components/HeaderMenu';



function FirstBanner(){
    return(
        <section className='sectionContainer bannerBkg'> 
            <HeaderMenu></HeaderMenu>
                <h1 className='restaurantName'>Nazar Bouncuk</h1>
                <h4 className='subtitleStyle'>Mediterranean gastronomy
                </h4>
        </section>
    )
}

export default FirstBanner