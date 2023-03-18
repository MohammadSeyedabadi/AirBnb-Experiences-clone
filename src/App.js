import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data'
import './style.css'

export default function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} item={item} />
  })

  return (
    <div>
      <Navbar />
      {/* <Card 
                img="katie-zaferes.png"
                rating="5.0"
                reviewCount={6}
                location="USA"
                title="Life Lessons with Katie Zaferes"
                price={136}
            /> */}
      {/* put it in section so it gives us the oppotubity to give {cards} a class name and do some styling and also make use of styles that we put on section, so we have padding on the left. */}
      <Hero />
      <section className="cards-list">{cards}</section>
    </div>
  )
}
