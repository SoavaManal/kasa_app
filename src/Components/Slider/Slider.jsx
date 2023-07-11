import { useState } from 'react'
import left from '../../assets/left.png'
import right from '../../assets/right.png'
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
            {pictures.length <= 1 ? (
                ''
            ) : (
                <button onClick={slideToLeft} className="leftChevron">
                    <img src={left} alt="Flèche à gauche" />
                </button>
            )}

            <img
                src={pictures[index]}
                alt="detail appartement"
                className="slide"
            />
            {pictures.length<=1? "" :<p>{index+1}/{pictures.length}</p>}
            {pictures.length <= 1 ? (
                ''
            ) : (
                <button onClick={slideToRight} className="rightChevron">
                    <img src={right} alt="Flèche à droite" />
                </button>
            )}
        </div>
    )
}
