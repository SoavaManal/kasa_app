import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";


export default function Slider({pictures}) {
    const [index,setIndex]=useState(0)

    const slideToLeft=()=>{
        setIndex(index===0? pictures.length-1 : index-1)
    }
    const slideToRight=()=>{
        setIndex(index===pictures.length-1 ? 0 : index+1)
    }
    return(
        <div>
            <button onClick={slideToRight}><FontAwesomeIcon icon={faChevronRight}/></button>
            <img src={pictures[index]} alt="detail appartement" className="slide"/>
            <button onClick={slideToLeft}><FontAwesomeIcon icon={faChevronLeft}/></button>
        </div>
    )
}