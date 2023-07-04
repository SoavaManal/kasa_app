import Collapse from "../../Components/Collapse/Collapse"
import "../../Style/index.css"
import "./about.css"
// import img from "../../assets/a_propos_img.png"
export default function About() {
  return (
    <div>
      <div className="pct_header">
        {/* <img src={img} alt=""/> */}
      </div>
      <div className="collaps_aboutPage">
        <Collapse text={"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."} title={"Fiabilité"}/>
        <Collapse text={"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."} title={"Respect"}/>
        <Collapse text={"Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."} title={"Service"}/>
        <Collapse text={"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."} title={"Sécurité"}/>
      </div>
    </div>
  )
}
