import heroImage from '../assets/Group82.png'
export default function Body() {
    return (
        <section className='body'>
            <img src={heroImage} alt="Hero Image" className='hero-img' />
            <div className="text">
                <h2>Online Experiences</h2>
                <p>Join unique interactive activities led by one-of-a-kind hosts-all without leaving home</p>
            </div>
        </section>
    )
}