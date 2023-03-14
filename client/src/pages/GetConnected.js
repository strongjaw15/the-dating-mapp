import { Maps } from "../components";

const GetConnected = ({ user }) => {
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

  function getRandomNumber(x) {
    return Math.floor(Math.random() * (x + 1));
  }

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
      const userInterests = await user.interestScore;
      console.log(result[18].interestScore);
      const possible = result.filter(
        (user) => user.interestScore === userInterests
      );
      const randomUser = getRandomNumber(possible.length);
      console.log("hi");
    }
  };
  const getLocation = () => {
    const locationID = "what";
    fetch(`/get-connected/${locationID}`);
    return locationID;
  };

  const displayLocation = () => {
    fetch(`/get-connected/${user._id}/${getLocation}/${getSoulMate}`)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      });
  };

  getSoulMate();

  return (
    <>
      <h1>Get Connected</h1>
      <div>
        <Maps />
      </div>

      <div className="connected-people">
        {userData.map((user) => (
          <div key={user.id} className="connected-person">
            <h2>{user.name}</h2>
            <p>{user.zipCode}</p>
          </div>
        ))}
      </div>

      <div className="connected-places"></div>
    </>
  );
};
export default GetConnected;
