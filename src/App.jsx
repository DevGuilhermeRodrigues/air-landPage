import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import Section from "./components/Section/Section"
import './style.css'

function App(){

  const tenis = [
    { modelo: 'https://cdn.shopify.com/s/files/1/2358/2817/files/nike-air-force-1-low-color-of-the-month-4.png?v=1707491009',
      nome: 'Air Force Nike Sneakers/Green',
      color: '#008000',
      id: 1
    },

    {
      modelo: 'https://images.tcdn.com.br/img/img_prod/993509/90_tenis_nike_air_force_1_low_07_retro_color_of_the_month_jewel_swoosh_university_red_805_1_233cf7b6654bcfe081959f162a2443f4.png',
      nome: 'Nike Court Vision Low Branco/Vermelho',
      color: '#ff0000',
      id: 2
    },

    {
      modelo: 'https://www.copclub.com.br/cdn/shop/products/Wethenew-Sneakers-France-Air-Force-1-Shadow-Cashmere-CI0919-700-1.0_1200x_9555ea36-079a-4da9-a5d9-837846227464.png?v=1632018923',
      nome: 'Nike Air Force Shadow "Cashmere" Begê',
      color: '#0000ff',
      id: 3
    }
  ]
 
  return (
    <>
     <Header />
     <Main />
     <Section tenis={tenis} />
    </>
  )
}

export default App