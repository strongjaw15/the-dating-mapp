import { Maps } from "../components";
import Carousel from "react-bootstrap/Carousel";
import person from "../images/person.png";
import "../styles/getConnected.css";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "animate.css";

const GetConnected = ({ user }) => {
  const [yourSoulMate, setSoulMate] = useState([]);
  const [yourLocation, setLocation] = useState({});
  const [loaded, setLoaded] = useState(false);

  function getRandomNumber(x) {
    return Math.floor(Math.random() * x);
  }

  // const getSoulMate = async () => {
  //   const query = await fetch("/api/user", {
  //     method: "get",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   if (!query.ok) {
  //     console.log("There are no users in the database");
  //   } else {
  //     const result = await query.json();
  //     const possible = result.filter(
  //       (soulMate) => soulMate.interestScore === user.interestScore
  //     );

  //     const randomUser = possible[getRandomNumber(possible.length)];
  //     const soulMateQuery = await fetch(`/api/get-connected/${randomUser._id}`);
  //     if (!soulMateQuery.ok) {
  //       console.log("There are no matches in the database");
  //     } else {
  //       const soulMate = await soulMateQuery.json();
  //       setSoulMate(soulMate);
  //     }
  //   }
  // };

  const getSoulMate = async () => {
    const query = await fetch("/api/user", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("SoulMate", query);
    if (!query.ok) {
      console.log("There are no users in the database");
    } else {
      const result = await query.json();
      console.log("Soul response", result);
      const possible = result.filter(
        (soulMate) => soulMate.interestScore === user.interestScore
      );
      console.log(possible);
      setSoulMate(possible);
    }
  };

  const getLocation = async () => {
    const query = await fetch("/api/get-connected/location", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("Location", query);
    if (!query.ok) {
      console.log("There are no locations in the database");
    } else {
      const result = await query.json();
      console.log("Location restponse", result);
      const randomLocation = result[getRandomNumber(result.length)];
      setLocation(randomLocation);
      setLoaded(true);
      console.log("Location", randomLocation);
    }
  };

  useEffect(() => {
    getSoulMate();
    getLocation();
  }, []);

  return (
    <div className="page animate__animated animate__fadeIn">
      <div className="mt-5">
        <h1 className="soulmates animate__animated animate__zoomIn animate__slow animate__delay-1s">
          {" "}
          Meet Your Soulmates!
        </h1>
      </div>
      <Container className="pt-3 pb-5 mx-0">
        <Row>
          <Col sm={12} lg={6}>
            <div className="connected-places animate__animated animate__zoomIn animate__delay-3s">
              {loaded && (
                <div className="maps">
                  <Maps yourLocation={yourLocation} />
                <p className="location">
                  You and your Soulmate should meet up at the {yourLocation.name},
                  a {yourLocation.type} at {yourLocation.address} at 6:37PM tomorrow.
                </p>
                </div>
              )}
            </div>
          </Col>

          <Col
            sm={12}
            lg={6}
            className="animate__animated animate__zoomIn animate__delay-3s align-items-center"
          >
            <div className="connected-people">
              <Carousel>
                {yourSoulMate.map((user) => (
                  <Carousel.Item key={user._id}>
                    <img
                      className="d-block w-100 user-profile"
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
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default GetConnected;
