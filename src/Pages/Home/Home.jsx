import Card from '../../Components/Card/Card'
import lodgings from '../../data/logements.json'
import './home.css'
import img from '../../assets/accueil_img.png'

export default function Home() {
    return (
        <div className='main'>
            <div className="presentation">
                <h1>Chez vous, partout et ailleurs</h1>
                <img src={img} alt="" />
            </div>
            <div className="cards">
                {lodgings.map((lodging) => (
                    <Card key={lodging.id} lodging={lodging} />
                ))}
            </div>
        </div>
    )
}
