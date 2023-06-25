import Card from "../../Components/Card/Card"
import lodgings from "../../data/logements.json"
import "./home.css"



export default function Home() {

  return(
    <div>
       <div className="presentation">
        {/* <img src="../assets/accueil_img.png" alt=""/> */}
        <h1>Chez nous, partous et ailleurs</h1>
       </div>
       <div>
        <ul className="cards">
          {lodgings.map(lodging=>(
            <Card key={lodging.id} lodging={lodging}/>
          ))}
        </ul>
       </div>
    </div>

  )
}
