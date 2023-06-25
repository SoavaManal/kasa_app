import { Link } from "react-router-dom"

export default function Header() {
return(
    <div>
        <div className="logo">
            <img src="../../assets/k.png" alt=""/>
            <img src="../../assets/group.png" alt=""/>
            <img src="../../assets/s.png" alt=""/>
            <img src="../../assets/a.png" alt=""/>
        </div>
        <ul>
    
          <Link to={"/"}>
            <li>Accueil</li>
          </Link>
     
      
          <Link to={"/about"}>
            <li>A Propos</li>
          </Link>
    
        </ul>
    </div>
)
}
