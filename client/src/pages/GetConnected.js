import { Maps } from "../components";
import Carousel from 'react-bootstrap/Carousel';
import person from '../images/person.png'
import '../styles/getConnected.css'

const GetConnected = () => {
  const userData = [
    {
      id: 1,
      name: "Ziggy Stardust",
      username: "ziggy",
      email: "ziggy@yahoo.com",
      zipCode: 555101,
      password: "password",
      interests: [
        {
          apple: "Granny Smith",
          season: "Fall",
          bread: "Sourdough",
          house: "Slytherin",
          movie: "Midsommer",
        },
      ],
    },
    {
      id: 2,
      name: "David Bowie",
      username: "davidbowie",
      email: "david@yahoo.com",
      zipCode: 55044,
      password: "password",
      interests: [
        {
          apple: "Golden Delicious",
          season: "Summer",
          bread: "Wheat",
          house: "Hufflepuff",
          movie: "The Village",
        },
      ],
    },
    {
      id: 3,
      name: "Lily Allen",
      username: "lilyallen",
      email: "lily@yahoo.com",
      zipCode: 55101,
      password: "password",
      interests: [
        {
          apple: "Golden Delicious",
          season: "Winter",
          bread: "Rye",
          house: "Ravenclaw",
          movie: "Them That Follow",
        },
      ],
    },
    {
      id: 4,
      name: "Stevie Nicks",
      username: "stevienicks",
      email: "stevie@yahoo.com",
      zipCode: 55101,
      password: "password",
      interests: [
        {
          apple: "Gala",
          season: "Spring",
          bread: "Pumpernickle",
          house: "Gryffindor",
          movie: "Hereditary",
        },
      ],
    },
  ];
  const userID = "aaa";
  const getSoulMate = () => {
    const soulMateID = "rockstar";
    fetch(`/get-connected/${soulMateID}`);
    return soulMateID;
  };

  const getLocation = () => {
    const locationID = "what";
    fetch(`/get-connected/${locationID}`);
    return locationID;
  };

  const displayLocation = () => {
    fetch(`/get-connected/${userID}/${getLocation}/${getSoulMate}`)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      });
  };

  return (
    <div className="page">
      {/* <h1>Get Connected</h1> */}
      <div className="maps">
        <Maps />
      </div>
    
      {/* <div className="connected-people">
        {userData.map((user) => (
          <div key={user.id} className="connected-person">
            <h2>{user.name}</h2>
            <p>{user.zipCode}</p>
          </div>
        ))}
      </div> */}

      <div className="connected-people">
        <Carousel>
        {userData.map((user) => (
              <Carousel.Item key={user.id} >
              <img
                className="d-block w-100"
                src={person}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>{user.name}</h3>
                <p>{user.zipCode}</p>
              </Carousel.Caption>
            </Carousel.Item>
        ))}
        </Carousel>
      </div>
      {/* <div className="connected-places"></div> */}
    </div>
  );
};

export default GetConnected;
