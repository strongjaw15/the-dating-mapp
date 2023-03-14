import { Maps } from "../components";
import { useState, useEffect } from "react";

const GetConnected = ({ user }) => {
  const [yourSoulMate, setSoulMate] = useState([]);
  const [yourLocation, setLocation] = useState({});

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
    if (!query.ok) {
      console.log("There are no users in the database");
    } else {
      const result = await query.json();
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
    if (!query.ok) {
      console.log("There are no locations in the database");
    } else {
      const result = await query.json();
      const randomLocation = result[getRandomNumber(result.length)];
      setLocation(randomLocation);
    }
  };

  useEffect(() => {
    getSoulMate();
    getLocation();
  }, []);

  return (
    <>
      <h1>Get Connected</h1>
      <div>
        <Maps yourLocation={yourLocation} />
      </div>

      <div className="connected-people">
        <p>
          Your potential Soul Mates are:
          {yourSoulMate.map((soulMate) => soulMate.name)}!
        </p>
      </div>

      <div className="connected-places">
        <p>
          You and {yourSoulMate.name} should meet up at the {yourLocation.name},
          a {yourLocation.type} at {yourLocation.address} at 6:37PM tomorrow.
        </p>
      </div>
    </>
  );
};
export default GetConnected;
