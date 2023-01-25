import '../App.css';
import React, { useState } from 'react'
import completeBreakfast from '../images/breakfast/completBreakfast.jpg'
import kaakBreakfast from '../images/breakfast/kaak.jpg'
import pancakeBreakfast from '../images/breakfast/pancake.jpg'
import saladEggBreakfast from '../images/breakfast/saladEgg.jpg'
import turkshCoffeBreakfast from '../images/breakfast/turkshcoffe.jpg'
import coalhadaLunch from '../images/lunch/coalhada1.jpg'
import homusLunch from '../images/lunch/homus1.jpg'
import kebabWithSalad from '../images/lunch/kebabaimg2.jpg'
import kebabAndSouces from '../images/lunch/kebabimg3.jpg'
import kebabAndFries from '../images/lunch/kebabImg1.jpg'
import saladLunch from '../images/lunch/salad1.jpg'
import completSaladLunch from '../images/lunch/salad2.jpg'
import hotSoup from '../images/lunch/soup1.jpg'
import chiliChicken from '../images/lunch/soup2.jpg'
import greenJuice from '../images/juices/green-juice.jpg'
import orangeJuice from '../images/juices/orange-juice.jpg'
import pomeGranadeJuice from '../images/juices/pomegranade-juice.jpg'
import baklawaSweet from '../images/sweet/Baklawa.jpg'


/*  Logica do menu 
    1-  Adicionar as imagens em um array correspondente a sua area do menu
    2-  Criar efeito de transição para colocar no botão ao ativar a seção 
    3-  Fazer com que ao clicar no botão ativar a animação de transição  e adicionar a imagem ao style do background da seção 
    4- Criar objetos com os valores  de cada prato para atribuilos dinamicament quando acionado algum dos botões 
    --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    Logica dos botões 

    Botão de cada seção 
            1 ter um identificador para cada seção
            2 cada seção tera um contador que seu limite muda de acordo com o length do seu array
                    - a ideia do limite é que caso  o botão voltar seja acionado quando  contador corresponde a 0  fazer ir pro valor maximo correspondente ao length e ir diminuindo caso o botão continue sendo acionado

            Botão de avançar 
                    O botão de avançar ira adicionar +1 ao contador da seção que corresponde a um elemento do array e se chegarmos ao valor maximo a contagem volta a zero 
            
            Botão de voltar 
                    O botão de voltar ira subtrair -1 ao contador da seção que corresponde a um elemento do array e se chegarmos ao valor minimo que é 0 a contagem volta ao valor maximo que é o length da seção 

        AMBOS OS BOTÕES ( AVANÇAR E RETROCEDER ) IRÃO ADICIONAR UM BACKGROUND NA SEÇÃO CORRESPONDENTE AO ELEMENTO QUE ESTA SENDO VISUALIZADO 






*/

function MenuFood(){

    const [breakfastItens, setBreakFastItens] =useState([
        {   name:"Complete Breakfast", 
            ingredients:"boiled eggs, pomegranate, grapes,brie cheese, Serrano jamon ham carpaccio, almonds, olives and figs",  description:"A fresh and healthy breakfast with an explosion of flavors ", 
            price:"40,00", 
            photo:completeBreakfast},
        {   name:"Kaak", 
            ingredients:"Flour, Sesame, Sugar, pomegranate syrup and milk", 
            description:"A kind of donut of Mediterranean with a special and sweet flavor", 
            price:"10,00", 
            photo: kaakBreakfast},
        {   name:"Pancake", 
            ingredients:"flour, eggs, sugar, baking powder, vanilla ", 
            description:" Three soft and tasty pancakes with honey and butter", 
            price:"8,00", 
            photo:pancakeBreakfast},
        {   name:'Arugula salad',
            ingredients:'Arugula, boiled egg and toast',
            description:'A fresh arugula salad with a crunchy toast and two boiled eggs',
            price:'15,00',
            photo:saladEggBreakfast,
        },
        {   name:'Turkish coffee',
            ingredients:'Special coffee,',
            description:'A 250ml mug filled with a tasty and aromatic special coffee from Morocco',
            price:'3,00',
            photo: turkshCoffeBreakfast,
        }])

    const [lunchMenu, setLunchMenu] =useState([
        {   name:'Curd',
            ingredients:'milk and seasons ',
            description:'delicious and fresh crud with toast',
            price:'8,00',
            photo:coalhadaLunch
        }, 
        {   name:'Homus',
            ingredients:'chickpea, tahini and seasons  ',
            description:'A delicious chickpea paste with toast',
            price:'8,00',
            photo:homusLunch
        }, 
        {   name:'Kebab with salad and crunchy',
            ingredients:'Meat, tomatoes, chickpea, seasons and lettuce',
            description:'A juicy roasted meat witha a delicious saland and roasted chickpea',
            price:'25,00',
            photo:kebabWithSalad
        }, 
        {   name:'',
            ingredients:'',
            description:'',
            price:'',
            photo:kebabAndSouces
        }, 
        {   name:'',
            ingredients:'',
            description:'',
            price:'',
            photo:kebabAndFries
        }, 
        {   name:'',
            ingredients:'',
            description:'',
            price:'',
            photo:saladLunch
        }, 
        {   name:'',
            ingredients:'',
            description:'',
            price:'',
            photo:completSaladLunch
        }, 
        {   name:'',
            ingredients:'',
            description:'',
            price:'',
            photo:hotSoup
        }, 
        {   name:'',
            ingredients:'',
            description:'',
            price:'',
            photo:chiliChicken
        }])

        const [juiceMenu, setJuiceMenu]= useState([
        {   name:'',
            ingredients:'',
            description:'',
            price:'',
            photo:greenJuice
        },
        {   name:'',
            ingredients:'',
            description:'',
            price:'',
            photo:orangeJuice
        },
        {   name:'',
            ingredients:'',
            description:'',
            price:'',
            photo:pomeGranadeJuice
        }])


        const[sweetMenu, setSweetMenu]=useState(
            {   name:'',
                ingredients:'',
                description:'',
                price:'',
                photo:baklawaSweet
            })


    return(
        <section className='menuSecStyle'>
            <h1>Menu</h1>
            <nav className='menuFoodsStyle'>
                <button className='btnFoodsStyle'>Breakfast</button>
                <button className='btnFoodsStyle'>Lunch</button>
                <button className='btnFoodsStyle'>Juices</button>
                <button className='btnFoodsStyle'>Desserts</button>
                
            </nav>
            <div className='menuImgAndTextContainer'>
                <div className='imgDisheContainer'>
                            <img src={''}></img>
                </div>
                <div className=' disheDescriptionContainer'>
                    <h4 className='textMenuFoodStyle'>Name</h4>
                    <p className='textMenuFoodStyle'>Ingredients:</p>
                    <p className='textMenuFoodStyle'>Description:</p>
                    <p className='textMenuFoodStyle'>Price:</p>
                </div>
            </div>
            
        </section>
    )
}


/* Adicionar todas as  imagens em um array para fazer  para fazer com que elas aparessam de acordo com o menu selecionado. Fazer com que essas mesmas imagens aparessam como back ground da section menu pra diferenciar as areas */

export default MenuFood