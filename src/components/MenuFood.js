import '../App.css';
import React, { useEffect, useState } from 'react'
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

/*   INSERIR EM CADA BOTÃO DE SEÇÃO DO MENU  UM IDENTIFICADOR PARA QUANDO CLICADO CARREGAR O VETOR DE IMAGENS QUE CORRESPONDE A SEÇÃO ADEQUADA  */

function MenuFood(){

    const [identifier, setIdentifier]=useState('')
    const[quantityItens, setQuantity]=useState(0)

    const [breakfastItens, setBreakFastItens] =useState([
        {   name:"Complete Breakfast", 
            ingredients:"boiled eggs, pomegranate, grapes,brie cheese, Serrano jamon ham carpaccio, almonds, olives and figs",  description:"A fresh and healthy breakfast with an explosion of flavors ", 
            price:"40,00"
        },
        {   name:"Kaak", 
            ingredients:"Flour, Sesame, Sugar, pomegranate syrup and milk", 
            description:"A kind of donut of Mediterranean with a special and sweet flavor", 
            price:"10,00"
        },
        {   name:"Pancake", 
            ingredients:"flour, eggs, sugar, baking powder, vanilla ", 
            description:" Three soft and tasty pancakes with honey and butter", 
            price:"8,00"
        },
        {   name:'Arugula salad',
            ingredients:'Arugula, boiled egg and toast',
            description:'A fresh arugula salad with a crunchy toast and two boiled eggs',
            price:'15,00'
        },
        {   name:'Turkish coffee',
            ingredients:'Special coffee,',
            description:'A 250ml mug filled with a tasty and aromatic special coffee from Morocco',
            price:'3,00'
        }])


    const [lunchMenu, setLunchMenu] =useState([
        {   name:'Curd',
            ingredients:'milk and seasons ',
            description:'delicious and fresh crud with toast',
            price:'8,00'
        }, 
        {   name:'Homus',
            ingredients:'chickpea, tahini and seasons  ',
            description:'A delicious chickpea paste with toast',
            price:'8,00'
        }, 
        {   name:'Kebab with salad and crunchy',
            ingredients:'Meat, tomatoes, chickpea, seasons and lettuce',
            description:'A juicy roasted meat witha a delicious saland and roasted chickpea',
            price:'25,00'
        }, 
        {   name:'Kebab with souce',
            ingredients:'Meat and special souces',
            description:'A juicy meat with special souces',
            price:'20,00'
        }, 
        {   name:'Traditional Kebab',
            ingredients:'meat, potatoes, tomamotes and onion',
            description:'The traditional kebab meat with delicious fried potatoes',
            price:'20,00'
        }, 
        {   name:'purple lettuce',
            ingredients:'purple lettuce, fresh seasons',
            description:'A fresh purple lettuce salad with special seasons',
            price:'10,00'
        }, 
        {   name:'Complete Lunch',
            ingredients:'avocado, rice, almonds, mangos, Green cabbage, String bean, chickpea and onion',
            description:'A delicious and complet lunch with all the best flavors and seasons of Mediterranean',
            price:'40,00'
        }, 
        {   name:'Pepper Soup',
            ingredients:'Pepper, String bean, basil and boiled potatoe',
            description:'Warm and comfort-food with an unforgettable season ',
            price:'20,00'
        }, 
        {   name:'Hot chicken',
            ingredients:'chicken, pepper, milk and seasons',
            description:'A healthy soup with a confort-food taste',
            price:''
        }])


        const [juiceMenu, setJuiceMenu]= useState([
        {   name:'Green juice',
            ingredients:'Lemon, mint, spices and water',
            description:'A fresh and  healthy juice',
            price:'4,00'
        },
        {   name:'Orange juice',
            ingredients:'Orange, carrot, sugar and water',
            description:'The classic orange juice with chef is special ingredient ',
            price:'4,00'
        },
        {   name:'Pomegranate juice',
            ingredients:'Pomegranate, water and sugar ',
            description:'Delicious and cold pomegranate juice',
            price:'5,00'
        }])

        const[sweetMenu, setSweetMenu]=useState(
            {   name:'Baklawa',
                ingredients:'Filo pastry, nuts, butter, cinnamon, honey, water, vanilla',
                description:'A classic Middle Eastern dessert. Sweet, crunchy and tasty',
                price:'10,00',
            })

            const[menuIndex, setmenuIndex]=useState(0)
            const breakfastImages= [completeBreakfast, kaakBreakfast, pancakeBreakfast, saladEggBreakfast, turkshCoffeBreakfast]
            const lunchMenuImages=[coalhadaLunch, homusLunch, kebabWithSalad, kebabAndSouces, kebabAndFries, saladLunch,
            completSaladLunch, hotSoup, chiliChicken]
            const juicesMenuImages =[greenJuice, orangeJuice, pomeGranadeJuice]

            const indentifiers={
                breakfast:breakfastImages,
                lunch:lunchMenuImages,
                juices:juicesMenuImages,
                sweet:baklawaSweet
            }

            useEffect(()=>{
                loadBreakFast()
                })

        function loadBreakFast(){
            let foodName= document.querySelector("#disheName")
            let foodIngradients= document.querySelector("#disheIngredients")
            let foodDescription= document.querySelector("#disheDescription")
            let foodPrice= document.querySelector("#dishePrice")
            setIdentifier('breakfast')
            setQuantity(4)

            foodName.innerText=breakfastItens[menuIndex].name
            foodIngradients.innerText= "Ingredients: "+breakfastItens[menuIndex].ingredients
            foodDescription.innerText= "Description: "+breakfastItens[menuIndex].description
            foodPrice.innerText="Price: "+breakfastItens[menuIndex].price
        }

        function loadLunch(){
            let foodName= document.querySelector("#disheName")
            let foodIngradients= document.querySelector("#disheIngredients")
            let foodDescription= document.querySelector("#disheDescription")
            let foodPrice= document.querySelector("#dishePrice")
            setIdentifier('lunch')
            setQuantity(5)

            foodName.innerText=lunchMenu[menuIndex].name
            foodIngradients.innerText= "Ingredients: "+lunchMenu[menuIndex].ingredients
            foodDescription.innerText= "Description: "+lunchMenu[menuIndex].description
            foodPrice.innerText="Price: "+lunchMenu[menuIndex].price
        }

        function nextItem(){
            if(menuIndex < quantityItens){
            setmenuIndex(menuIndex+1)
                }
            if(menuIndex ===quantityItens){
                setmenuIndex(0)
            }
        }

        function previousItem(){
            if(menuIndex > 0){
                setmenuIndex(menuIndex-1)
            }
            if(menuIndex === 0){
                setmenuIndex(menuIndex+4)
            }
        }






    return(
        <section className='menuSecStyle'>
            <h1>Menu</h1>
            <nav className='menuFoodsStyle'>
                <button className='btnFoodsStyle'onClick={loadBreakFast}>Breakfast</button>
                <button className='btnFoodsStyle'onClick={loadLunch}>Lunch</button>
                <button className='btnFoodsStyle'>Juices</button>
                <button className='btnFoodsStyle'>Desserts</button>    
            </nav>
            <div className='menuImgAndTextContainer'>
                <div className='imgDisheContainer'>
                            <img id='disheImage'src={''}></img>
                </div>
                <div className=' disheDescriptionContainer'>
                    <h4 className='textMenuFoodStyle' id='disheName'>Name</h4>
                    <p className='textMenuFoodStyle' id='disheIngredients'>Ingredients:</p>
                    <p className='textMenuFoodStyle' id='disheDescription'>Description:</p>
                    <p className='textMenuFoodStyle' id='dishePrice'>Price:</p>
                </div>
            </div>
            <div className='btnsContainerOfMenu'>
                <button className='menuItensChange' onClick={previousItem}>Previous</button> 
                <button className='menuItensChange' onClick={nextItem}>Next</button>
            </div>
            
        </section>
    )
}

export default MenuFood