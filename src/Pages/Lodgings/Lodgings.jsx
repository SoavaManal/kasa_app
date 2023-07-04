import lodgings from "../../data/logements.json"
import { useParams } from "react-router-dom";
import Rating from "../../Components/Rating/Rating"
import Collapse from "../../Components/Collapse/Collapse"
import Slider from "../../Components/Slider/Slider"
import "../../Style/index.css"

export default function Lodgings() {
  const GetId = () => {
    const routeParams = useParams();
    return routeParams;
  };
  const lodging=lodgings.find(lodging=>lodging.id===GetId().id)
  return (
    <div>
      <div>
        <Slider pictures={lodging.pictures}/>
      </div>
      <div className="left">
        <h2>{lodging.title}</h2>
        <p>{lodging.location}</p>
        <ul className="tags">
          {lodging.tags.map((tag,index)=><li key={index} className="tag">{tag}</li>)}
        </ul>
      </div>
      <div className="right">
        <h3>{lodging.host.name}</h3>
        <img src={lodging.host.picture} alt="profil" className="profil"/>
        <Rating activeStar={lodging.rating} totalStar="5"/>
      </div>
      <div>

      <Collapse text={lodging.description} title="Description"/>
      <Collapse text={lodging.equipments} title="Equipements"/>
      </div>
    </div>
  );
}
