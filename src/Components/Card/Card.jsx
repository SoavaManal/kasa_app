import { Link } from 'react-router-dom'
import './card.css'

export default function Card({ lodging }) {
    return (
        <article className="card">
            <Link to={`/lodgings/${lodging.id}`}>
                <img src={lodging.cover} alt="" className="card_img" />
                <h2 className="card_li">{lodging.title}</h2>
            </Link>
        </article>
    )
}
