import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../Style/index.css'

export default function Rating({ activeStar, totalStar }) {
    const starOff = totalStar - activeStar
    const activeArray = Array(parseInt(activeStar)).fill(0)
    const offArray = Array(starOff).fill(0)
    return (
        <div>
            {activeArray.map((_, index) => (
                <span key={index} className="active_star">
                    <FontAwesomeIcon icon={faStar} />
                </span>
            ))}
            {offArray.map((_, index) => (
                <span key={index + activeStar} className="noactive_star">
                    <FontAwesomeIcon icon={faStar} />
                </span>
            ))}
        </div>
    )
}
