import { useLocation } from 'react-router-dom';

const imgs = [
    'https://firebasestorage.googleapis.com/v0/b/fir-example-a1f6f.appspot.com/o/bg.jpg?alt=media&token=7d975764-8a06-432e-a978-e33e74b7ecf2',
    'https://firebasestorage.googleapis.com/v0/b/fir-example-a1f6f.appspot.com/o/back2.jpg?alt=media&token=40dc53f5-be41-4909-a08b-b9e684ef8cd4',
    'https://firebasestorage.googleapis.com/v0/b/fir-example-a1f6f.appspot.com/o/back3.jpg?alt=media&token=0ab352a4-05a9-4da2-8e46-fd2873d966ea',
]

function Hero() {
    const location = useLocation();

    let imgSrc = '';
    if (location.pathname === '/') {
        imgSrc = imgs[0];
    } else if (location.pathname === '/menu') {
        imgSrc = imgs[1];
    } else if (location.pathname === '/about') {
        imgSrc = imgs[2]; // set text color to white for the third image
    }

    return (
        <div
            className="hero-image"
            style={{
                backgroundImage: `url(${imgSrc})`,
                height: '50vh',
                width: '100 %',
                display: 'flex',
                justifyContent: 'center',
            backgroundSize: 'cover',
            backgroundRepeat:' no-repeat',
            
            }}
        >
    <blockquote className=" mt-5 d-flex justify-content-center blockquote  align-items-center">
        <h3 className='hero-h3 text-white fc p-5'>"Sip, relax and savor the moment"</h3>
    </blockquote>
        </div >
    );
}
export default Hero