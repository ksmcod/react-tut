import heroImage from '../assets/Group82.png'
export default function Hero() {
    return (
        <section className='hero'>
            <img src={heroImage} alt="Hero Image" className='hero-img' />
            <div className="text">
                <h2>Online Experiences</h2>
                <p>Join unique interactive activities led by one-of-a-kind hosts-all without leaving home</p>
            </div>
        </section>
    )
}