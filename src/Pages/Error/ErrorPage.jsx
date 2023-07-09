import { Link } from 'react-router-dom'
import error from "../../assets/404.png"
import "./error.css"
export default function ErrorPage() {
    return (
        <div className='center'>
            <img src={error} alt="erreur 404" className='error_img'/>
            <p className='error_p'>Oups! La page que vous demandez n'éxiste pas.</p>
            <Link to={'/'}>Retourner sur la page d'accueil</Link>
        </div>
    )
}
