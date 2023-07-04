import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faChevronLeft,
    faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import './slider.css'

export default function Slider({ pictures }) {
    const [index, setIndex] = useState(0)

    const slideToLeft = () => {
        setIndex(index === 0 ? pictures.length - 1 : index - 1)
    }
    const slideToRight = () => {
        setIndex(index === pictures.length - 1 ? 0 : index + 1)
    }
    return (
        <div className="slider_div">
            <button onClick={slideToLeft}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <img
                src={pictures[index]}
                alt="detail appartement"
                className="slide"
            />
            <button onClick={slideToRight}>
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        </div>
    )
}
