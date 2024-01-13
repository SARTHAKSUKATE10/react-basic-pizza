import React from 'react'
import MultiplePizzas from '../assets/multiplePizzas.jpeg'
import '../styles/about.css'

function About() {
  return (
    <div className='about'>
      <div className='aboutTop' style={{backgroundImage:`url(${MultiplePizzas})` }}></div>
      <div className='aboutBottom'>
        <h1>ABOUT US</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem commodi exercitationem consequatur impedit, rerum nemo molestiae quo laborum asperiores ab a necessitatibus minima, fugiat ipsam doloribus veritatis sunt nobis perspiciatis eveniet maxime possimus voluptates? Libero quos voluptates quod officiis sunt ipsam, praesentium totam possimus earum blanditiis consequatur reprehenderit inventore ut nesciunt dicta repellat et minima labore repudiandae fugiat quidem provident qui! Perspiciatis beatae explicabo quam hic rerum aperiam cum fugit earum accusantium consequatur et ullam similique inventore obcaecati a, veniam expedita excepturi corrupti esse! Minus earum maxime blanditiis eos sequi distinctio nobis ducimus, incidunt tempore libero officia sunt beatae quas!</p>
      </div>
    </div>
  )
}

export default About
