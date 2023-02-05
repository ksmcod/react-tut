import cardImage from '../assets/image12.png'
import star from '../assets/Star.png'

export default function Card() {
    return (
        <div className="card">
            <div className="card-hero">
                <span className="availability">Sold out</span>
                <img src={cardImage} alt="" className='card-img' />
            </div>
            <div className="line-one">
                <img src={star} alt="star" />5.0 <span className='grey-text'> (6) - USA </span>
            </div>
            <div className="line-two">
                <p>Life lessons with Katie Zaferes</p>
            </div>
            <div className="line-three">
                <strong>From $136</strong> <span className="grey-text">/ person</span>
            </div>
        </div>
    )
}