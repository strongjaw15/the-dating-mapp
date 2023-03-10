
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
      <Carousel.Item >
        <img
          className="d-block w-50"
          src={fair}
          alt="First slide"
        />
        <Carousel.Caption bsPrefix='carousel-text'>
          <p>"This date was on a whim but I was pleasantly surprised by how much fun I had! Ate awesome food, rode rides, and drank lots of local brews. 10/10 would recommend!"</p>
          <h3>- danibano</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-50"
          src={icecream}
          alt="Second slide"
        />
        <Carousel.Caption bsPrefix='carousel-text'>
          <p>"The king of all ice cream shops, they have fun and unique flavors, I didn't even share with my date! Ice cream: 1 Date: 0"</p>
          <h3>- likemyke</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-50"
          src={camp}
          alt="Third slide"
        />
        <Carousel.Caption bsPrefix='carousel-text'>
          <p>"People who hike together, stay together."</p>
          <h3>- monalisa</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    </div>
  )
}

export default HomePage;
