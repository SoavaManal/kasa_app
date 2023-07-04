import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Rating({activeStar,totalStar}){

    return(
        <div>
            <FontAwesomeIcon icon={faStar} />
        </div>
    )
}