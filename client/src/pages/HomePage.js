import '../styles/homepage.css'
import fair from '../images/fair-date.jpg'
import icecream from '../images/icecream-date.jpg'
import camp from '../images/camp-date.jpg'
import Carousel from 'react-bootstrap/Carousel';
import profile from '../images/profile.jpg'
import gender from '../images/gender.jpg'
import couple from '../images/couple.jpg'
// import SplitFlapDisplay from "react-split-flap-display";
// import Stats from '../components/Stats';


const HomePage = () => {
  return (
    <div className='display'>
      <div className='testimony animate__animated animate__fadeIn animate__delay-1s'>
        <div className='size'>
          <Carousel>
            <Carousel.Item interval={5000}>
              <img
                className="d-block w-50 carousel-img"
                src={fair}
                alt="First slide"
              />
              <Carousel.Caption bsPrefix='carousel-text'>
                <p>"Ate awesome food, rode rides, and drank lots of local brews. 10/10 would recommend!"</p>
                <h3 className='username'>- danibano</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <img
                className="d-block w-50 carousel-img"
                src={icecream}
                alt="Second slide"
              />
              <Carousel.Caption bsPrefix='carousel-text'>
                <p>"The king of all ice cream shops, they have fun and unique flavors, I didn't even share with my date! Ice cream: 1 Date: 0"</p>
                <h3 className='username'>- likemyke</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <img
                className="d-block w-50 carousel-img"
                src={camp}
                alt="Third slide"
              />
              <Carousel.Caption bsPrefix='carousel-text'>
                <p>"We went up the trail together, then we did some of my hiking rituals but I came back down the trail alone."</p>
                <h3 className='username'>- monalisa</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>

      {/* <div>
        <Stats/>    
      </div> */}

      <div className='aside animate__animated animate__fadeIn animate__delay-2s'>
        <div className='stats-box'>
          <div className='stats-img'>
            <img src={profile} alt='profile' className='stats-icon'/>
          </div>
          <div className='stats-text'>
            <h2>
              Create A Profile
            </h2>
            <p>
            Looking for love? We can find you the perfect match with just 4 questions! Our user-friendly interface and advanced matching algorithms make it easy to find someone who shares your interests and values. Don't wait any longer, sign up now and start your journey to finding true love!
            </p>
          </div>
        </div>

        <div className='stats-box'>
          <div className='stats-img'>
            <img src={gender} alt='gender' className='stats-icon'/>
          </div>
          <div className='stats-text'>
            <h2>
              Find Matches
            </h2>
            <p>
            Finding a match can be an exciting and fulfilling experience. Our platform is designed to help you meet new people and find meaningful connections by setting up the date for you at one of our recommended locations to share an experience together and create a life-long bond.
            </p>
          </div>
        </div>

        <div className='stats-box'>
          <div className='stats-img'>
            <img src={couple} alt='couple' className='stats-icon'/>
          </div>
          <div className='stats-text'>
            <h2>
              Start Dating
            </h2>
            <p>
              Once you find your match, the next step is to make it official! Even if you're afraid of commitment, don't worry, you're free to come back and find more matches. Why have one match when you can have many? We're all family here. We believe in being open-minded and free from judgement.
            </p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default HomePage;