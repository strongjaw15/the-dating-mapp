import '../styles/homepage.css'
import fair from '../images/fair-date.jpg'
import icecream from '../images/icecream-date.jpg'
import camp from '../images/camp-date.jpg'
import Carousel from 'react-bootstrap/Carousel';
import SplitFlapDisplay from "react-split-flap-display";
import Stats from '../components/Stats';


const HomePage = () => {
  return (
    <div className='display'>
      <div className='size'>
        <Carousel>
          <Carousel.Item interval={5000}>
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
              <p>"We went up the trail together, then we did some of my hiking rituals but I came back down the trail alone."</p>
              <h3>- monalisa</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      {/* <div>
        <Stats/>    
      </div> */}

    </div>
  )
}

export default HomePage;