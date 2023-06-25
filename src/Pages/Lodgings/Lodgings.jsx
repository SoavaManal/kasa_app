import lodgings from "../../data/logements.json"
import { useParams } from "react-router-dom";
// import Rating from "../../Components/Rating/Rating"
import Collapse from "../../Components/Collapse/Collapse"

export default function Lodgings() {
  const GetId = () => {
    const routeParams = useParams();
    return routeParams;
  };
  const lodging=lodgings.find(lodging=>lodging.id===GetId().id)
  return (
    <div>
      <div className="left">
        <h2>{lodging.title}</h2>
        <p>{lodging.location}</p>
        <ul>
          {lodging.tags.map(tag=><li>{tag}</li>)}
        </ul>
      </div>
      <div className="right">
        <h3>{lodging.host.name}</h3>
        <img src={lodging.host.picture} alt="profil"/>
        {/* <Rating/> */}
      </div>
      <Collapse text={lodging.description} title="Description"/>
      <Collapse text={lodging.equipments} title="Equipements"/>
    </div>
  );
}
