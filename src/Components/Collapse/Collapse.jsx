import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

export default function Collapse({text, title}) {
    const [collapse, setCollapse]=useState(true)
    const toggleCollapse=()=>{
        setCollapse(!collapse);

    }
  return (
    <div>
        <button onClick={toggleCollapse}>{title}<FontAwesomeIcon icon={collapse? faChevronUp: faChevronDown}/></button>
        {!collapse && (
            <p>{text}</p>
        )}
    </div>
  );
}