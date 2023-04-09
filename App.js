import React from "react"
import Nav from "./Nav"
import Card from "./Card"
import data from "./data"

export default function App() {
    const cards = data.map(item => {
        return (
           <Card 
             key={item.id}   
             {...item}
           />
        )
    })
    return (
        <div>
            <Nav />
            {cards} 
        </div>
    )
}