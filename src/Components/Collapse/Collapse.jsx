import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import './collapse.css'

export default function Collapse({ text, title }) {
    const [collapse, setCollapse] = useState(true)
    const toggleCollapse = () => {
        setCollapse(!collapse)
    }
    return (
        <div className="collapse_div">
            <button onClick={toggleCollapse} className="btn_collapse">
                {title}
                <FontAwesomeIcon
                    icon={collapse ? faChevronDown : faChevronUp}
                />
            </button>
            {!collapse && (Array.isArray(text) ? (
                <ul className='list_equipement'>
                    {' '}
                    {text.map((t, index) => (
                        <li key={index}>{t}</li>
                    ))}
                </ul>
            ) : (
                <p>{text}</p>
            ))}
        </div>
    )
}
