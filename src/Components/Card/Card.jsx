import { Link } from "react-router-dom"
import "./card.css"

export default function Card({lodging}){
    return(  
        <li className="card">
        <Link to={`/lodgings/${lodging.id}`}>
            <img src={lodging.cover} alt="" className="card_img"/>
            <li className="card_li">{lodging.title}</li>
        </Link>
        </li>
      )
}