import React from "react"
import styles from "./index.css"
import Top from "./components/Top"
import Bottom from "./components/Bottom"
import Data from "./components/Data"
import dataTravel from "./components/Data"

export default function App(){
    const cards = dataTravel.map(function(item){
        return  <Bottom
              key={item.id}
              {...item}
            />       
      })
    return(
        <div>
            <Top />
            <section className="cards-list">
            {cards}
            </section> 
        </div>
    )
}