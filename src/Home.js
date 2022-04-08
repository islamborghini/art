import React from 'react'
import './Home.css'
import Banner from './Banner'
import Card from './Card'
import FirstCard from 'D:/Projects/art/src/pics/batik/1.jpeg'
import SecondCard from 'D:/Projects/art/src/pics/gobelen/1.jpeg'
import ThirdCard from 'D:/Projects/art/src/pics/graphics/1.jpeg'
import FourthCard from 'D:/Projects/art/src/pics/paintings/1.jpeg'
import FifthCard from 'D:/Projects/art/src/pics/voilok/1.jpeg'

function Home() {
  return (
    <div className = "home">
        <Banner/>
        <div className = "home__section">
            <Card src={FirstCard} title="Батик" description="Батик - это общее название разнообразных способов и техник художественной росписи по ткани. "/>
            <Card src={SecondCard} title="Гобелен" description="Гобелен (от французского gobelin) или шпалера — безворсовый ковёр или тканая картина, выполненная вручную. Гобелен создаётся перекрёстным переплетением нитей, благодаря чему одновременно получается изображение и ткань с уникальными цветовыми нюансами."/>
            <Card src={ThirdCard} title="Графика" description="Графика — это разновидность изобразительного искусства, где изображение создаётся преимущественно с помощью линий, штриховки и пятен, которые рождают тональные нюансы "/>
        </div>
        <div className='home__section2'>
            <Card src={FourthCard} title="Живопись" description="Живопись - вид изобразительного искусства, произведения которого создаются с помощью красок, наносимых на какую-либо поверхность. "/>
            <Card src={FifthCard} title="Войлок" description="Валяние войлока - самая древняя техника изготовления изделий из шерсти. Сам войлок существует столько же, сколько существуют на Земле овцы, кони, козы. "/>
        </div>
    </div>
  )
}

export default Home