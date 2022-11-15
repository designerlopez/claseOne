
import './App.css'
import Card from './components/Card'

function App() {

  const cardInfo=[{
    title: "personal",
    item1:"pepito perez",
    item2:"edad:25 años",
    item3: "pelicula favorita",
    item4: "musica favorita: norteña", 
    colorCard: "#7FFFD4" 
  }, 
  {
    title: "Hobbies",
    item1:"anime ",
    item2: "voleibol",
    item3: "musica" ,
    item4: "comer",
    colorCard: "#E14D2D"
  },
  {
    title: "comida favorita",
    item1:"sancocho",
    item2: "caldo de costilla",
    item3: "bandeja paisa", 
    item4: "pechuga a la plancha",
    colorCard: "#F3A710"
  },

  {
    title: "my stack tech",
    item1:"html",
    item2: "css",
    item3: "js", 
    item4: "react",
    colorCard: "#C8FE00"
  }
]
 
  return (
  
    <div className="App">
      {cardInfo.map((card, index)=>{
        return <Card key ={index} title={card.title} item1={card.item1}
         item2={card.item2} item3={card.item3} />;
      })}
    </div>
    
  )
}

export default App
