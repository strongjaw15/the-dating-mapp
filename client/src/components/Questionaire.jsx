import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {useState} from 'react'


const Questionaire = ({formData, openModal, setMessage, setSignupResult}) => {

  const [ questionaireData, setQuestionaireData ] = useState()
  const [apple, setApple] = useState('Apple');
  const [season, setSeason] = useState('Season');
  const [bread, setBread] = useState('Bread');
  const [house, setHouse] = useState('House');
  const [movie, setMovie] = useState('Movie');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let interestScore = 0

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

  const setInterestScore = () => {
    console.log(questionaireData)
    switch (questionaireData.apple) {
      case "Granny Smith":
        interestScore += 1
        break;
      case "Golden Delicious":
        interestScore += 2
        break;
      case "Gala":
        interestScore += 3
        break;
      case "Honey Crisp":
        interestScore += 4
        break;
    }
    switch (questionaireData.season) {
      case "Spring":
        interestScore += 1
        break;
      case "Summer":
        interestScore += 2
        break;
      case "Fall":
        interestScore += 3
        break;
      case "Winter":
        interestScore += 4
        break;
    }
    switch (questionaireData.bread) {
      case "Sourdough":
        interestScore += 1
        break;
      case "Wheat":
        interestScore += 2
        break;
      case "Rye":
        interestScore += 3
        break;
      case "Pumpernickle":
        interestScore += 4
        break;
    }
    switch (questionaireData.house) {
      case "Slytherin":
        interestScore += 1
        break;
      case "Hufflepuff":
        interestScore += 2
        break;
      case "Ravenclaw":
        interestScore += 3
        break;
      case "Gryffendor":
        interestScore += 4
        break;
    }
    switch (questionaireData.movie) {
      case "The Village":
        interestScore += 1
        break;
      case "Midsommar":
        interestScore += 2
        break;
      case "Them That Follow":
        interestScore += 3
        break;
      case "Hereditary":
        interestScore += 4
        break;
    }
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setMessage(`Please enter matching passwords.`);
      openModal();
    } else if (
      formData.email === "" ||
      formData.name === "" ||
      formData.username === "" ||
      formData.zipCode === "" ||
      formData.password === "" ||
      formData.confirmPassword === ""
    ) {
      setMessage(`Please fill out all forms.`);
      openModal();
    } else if (!emailRegex.test(formData.email)) {
      setMessage(`Please enter a valid email address.`);
      openModal();
    } else if (!questionaireData){
      setMessage(`Please fill out the interest fields. You will be able to change your answers later.`);
      openModal();
    } else if (
      !questionaireData.apple || 
      !questionaireData.season || 
      !questionaireData.bread ||
      !questionaireData.house || 
      !questionaireData.movie) {
      setMessage(`Please fill out all interest fields. You will be able to change your answers later.`);
      openModal();
    }
    else {
      setInterestScore()
      questionaireData.interestScore = interestScore
      console.log(formData)
      const query = await fetch("/api/user", {
        method: "post",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      // if (!query.ok) {
      //   setSignupResult("fail");
      // } else {
      //   const result = await query.json();
      //   console.log(result)
      //   questionaireData.user = result._id
      //   const questionQuery = await fetch("/api/interest", {
      //     method: "post",
      //     body: JSON.stringify(questionaireData),
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //   });
      //   if(!questionQuery.ok){
      //     const questionResult = await questionQuery.json()
      //     console.log(questionResult)
      //     setSignupResult("success");
      //   }
      // }

          if (!query.ok) {
            setSignupResult("fail");
          } else {
            const result = await query.json();
            console.log(result)
            questionaireData.user = result._id
            const questionQuery = await fetch("/api/interest", {
              method: "post",
              body: JSON.stringify(questionaireData),
              headers: {
                "Content-Type": "application/json",
              },
            });
            if (questionQuery.ok) {
              const questionResult = await questionQuery.json();
              console.log(questionResult);
            }
            setSignupResult("success");
          }
        }
  };

  return (

    <div>
      <h3>In order to best match you to your interest, please fill out the following questionaire</h3>
        <Dropdown>
          <label>What is your favorite type of apple?</label>
          <DropdownButton id="dropdown-apple-button" title={apple}>
            <Dropdown.Item name="apple" onClick={handleInputChange}>Granny Smith</Dropdown.Item>
            <Dropdown.Item name="apple" onClick={handleInputChange}>Golden Delicious</Dropdown.Item>
            <Dropdown.Item name="apple" onClick={handleInputChange}>Gala</Dropdown.Item>
            <Dropdown.Item name="apple" onClick={handleInputChange}>Honey Crisp</Dropdown.Item>
          </DropdownButton>

          <label>What is your favorite season?</label>
          <DropdownButton id="dropdown-season-button" title={season}>
            <Dropdown.Item name="season" onClick={handleInputChange}>Spring</Dropdown.Item>
            <Dropdown.Item name="season" onClick={handleInputChange}>Summer</Dropdown.Item>
            <Dropdown.Item name="season" onClick={handleInputChange}>Fall</Dropdown.Item>
            <Dropdown.Item name="season" onClick={handleInputChange}>Winter</Dropdown.Item>
          </DropdownButton>

          <label>What is your favorite type of bread?</label>
          <DropdownButton id="dropdown-bread-button" title={bread}>
            <Dropdown.Item name="bread" onClick={handleInputChange}>Sourdough</Dropdown.Item>
            <Dropdown.Item name="bread" onClick={handleInputChange}>Wheat</Dropdown.Item>
            <Dropdown.Item name="bread" onClick={handleInputChange}>Rye</Dropdown.Item>
            <Dropdown.Item name="bread" onClick={handleInputChange}>Pumpernickle</Dropdown.Item>
          </DropdownButton>

          <label>What Hogwards house do you belong to?</label>
          <DropdownButton id="dropdown-house-button" title={house}>
            <Dropdown.Item name="house" onClick={handleInputChange}>Slytherin</Dropdown.Item>
            <Dropdown.Item name="house" onClick={handleInputChange}>Hufflepuff</Dropdown.Item>
            <Dropdown.Item name="house" onClick={handleInputChange}>Ravenclaw</Dropdown.Item>
            <Dropdown.Item name="house" onClick={handleInputChange}>Gryffendor</Dropdown.Item>
          </DropdownButton>

          <label>What is your favorite movie?</label>
          <DropdownButton id="dropdown-movie-button" title={movie}>
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