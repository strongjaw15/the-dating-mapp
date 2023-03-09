import '../styles/homepage.css'
import fair from '../images/fair-date.jpg'
import icecream from '../images/icecream-date.jpg'
import camp from '../images/camp-date.jpg'
import Carousel from 'react-bootstrap/Carousel';


const HomePage = ({user}) => {

  return (
    < div className='display'>
      {/* <div>
        <h1>Sweet Stories from Our Lovers</h1>
        <div>
          <div className='card'>
            <img src= {fair} alt='fair' />
            <div className='container'>
              <p>so much fun at the state fair.</p>
            </div>
          </div>

          <div className='card'>
            <img src= {icecream} alt='icecream' />
            <div className='container'>
              <p>phone eat first</p>
            </div>
          </div>

          <div className='card'>
            <img src= {camp} alt='camp' />
            <div className='container'>
              <p>just hanging</p>
            </div>
          </div>
        </div>
      </div> */}

<Carousel className='size'>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-50"
          src={fair}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-50"
          src={icecream}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-50"
          src={camp}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    </div>
  )
}

export default HomePage