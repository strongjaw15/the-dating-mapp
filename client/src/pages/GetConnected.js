import { Maps } from "../components";

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
