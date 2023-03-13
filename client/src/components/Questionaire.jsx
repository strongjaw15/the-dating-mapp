import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {useState} from 'react'


const Questionaire = ({formData, openModal}) => {

  const [ questionaireData, setQuestionaireData ] = useState()
  const [apple, setApple] = useState('Apple');
  const [season, setSeason] = useState('Season');
  const [bread, setBread] = useState('Bread');
  const [house, setHouse] = useState('House');
  const [movie, setMovie] = useState('Movie');
  const [message, setMessage] = useState("");
  const [signupResult, setSignupResult] = useState("");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleInputChange = (e) => {
    const { name, textContent } = e.target;
    setQuestionaireData({ ...questionaireData, [name]: textContent });
    switch (name) {
      case 'apple':
        setApple(textContent);
        break;
      case 'season':
        setSeason(textContent);
        break;
      case 'bread':
        setBread(textContent);
        break;
      case 'house':
        setHouse(textContent);
        break;
      case 'movie':
        setMovie(textContent);
        break;
      default:
        break;
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setMessage(`Please enter matching passwords.`);
      openModal();
    } else if (
      formData.email === "" ||
      formData.fname === "" ||
      formData.username === "" ||
      formData.zipcode === "" ||
      formData.password === "" ||
      formData.confirmPassword === ""
    ) {
      setMessage(`Please fill out all forms.`);
      openModal();
    } else if (!emailRegex.test(formData.email)) {
      setMessage(`Please enter a valid email address.`);
      openModal();
    } else {
      const query = await fetch("/api/user", {
        method: "post",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!query.ok) {
        setSignupResult("fail");
      } else {
        const result = await query.json();
        setSignupResult("success");
        console.log(result);
      }
    }
  };

  return (

    <div>
      <h3>In order to best match you to your interest, please fill out the following questionaire</h3>
        <Dropdown>
          <label>What is your favorite type of apple?</label>
          <DropdownButton id="dropdown-basic-button" title={apple}>
            <Dropdown.Item name="apple" onClick={handleInputChange}>Granny Smith</Dropdown.Item>
            <Dropdown.Item name="apple" onClick={handleInputChange}>Golden Delicious</Dropdown.Item>
            <Dropdown.Item name="apple" onClick={handleInputChange}>Gala</Dropdown.Item>
            <Dropdown.Item name="apple" onClick={handleInputChange}>Honey Crisp</Dropdown.Item>
          </DropdownButton>

          <label>What is your favorite season?</label>
          <DropdownButton id="dropdown-basic-button" title={season}>
            <Dropdown.Item name="season" onClick={handleInputChange}>Spring</Dropdown.Item>
            <Dropdown.Item name="season" onClick={handleInputChange}>Summer</Dropdown.Item>
            <Dropdown.Item name="season" onClick={handleInputChange}>Fall</Dropdown.Item>
            <Dropdown.Item name="season" onClick={handleInputChange}>Winter</Dropdown.Item>
          </DropdownButton>

          <label>What is your favorite type of bread?</label>
          <DropdownButton id="dropdown-basic-button" title={bread}>
            <Dropdown.Item name="bread" onClick={handleInputChange}>Sourdough</Dropdown.Item>
            <Dropdown.Item name="bread" onClick={handleInputChange}>Wheat</Dropdown.Item>
            <Dropdown.Item name="bread" onClick={handleInputChange}>Rye</Dropdown.Item>
            <Dropdown.Item name="bread" onClick={handleInputChange}>Pumpernickle</Dropdown.Item>
          </DropdownButton>

          <label>What Hogwards house do you belong to?</label>
          <DropdownButton id="dropdown-basic-button" title={house}>
            <Dropdown.Item name="house" onClick={handleInputChange}>Slytherin</Dropdown.Item>
            <Dropdown.Item name="house" onClick={handleInputChange}>Hufflepuff</Dropdown.Item>
            <Dropdown.Item name="house" onClick={handleInputChange}>Ravenclaw</Dropdown.Item>
            <Dropdown.Item name="house" onClick={handleInputChange}>Gryffendor</Dropdown.Item>
          </DropdownButton>

          <label>What is your favorite movie?</label>
          <DropdownButton id="dropdown-basic-button" title={movie}>
            <Dropdown.Item name="movie" onClick={handleInputChange}>The Village</Dropdown.Item>
            <Dropdown.Item name="movie" onClick={handleInputChange}>Midsommar</Dropdown.Item>
            <Dropdown.Item name="movie" onClick={handleInputChange}>Them That Follow</Dropdown.Item>
            <Dropdown.Item name="movie" onClick={handleInputChange}>Hereditary</Dropdown.Item>
          </DropdownButton>
        </Dropdown>
        <div className="form-group mt-2">
            <button className="btn btn-primary" onClick={handleFormSubmit}>
              Sign Me Up!
            </button>
          </div>
      </div>
      
  )
}

export default Questionaire