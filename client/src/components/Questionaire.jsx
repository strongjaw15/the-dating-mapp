import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {useState} from 'react'


const Questionaire = ({user}) => {

  const [ formData, setFormData ] = useState()

  const handleInputChange = (e) => {
    console.log(e.target)
    console.log(e.target.textContent)
    setFormData( {[e.target.textContent]: e.target.name})
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    console.log(formData)
  }

  return (

    <div>
      <h2>In order to best match you to your interest, please fill out the following questionaire</h2>
        <Dropdown>
          <label>What is your favorite type of apple?</label>
          <DropdownButton id="dropdown-basic-button" title="Apple">
            <Dropdown.Item name="Granny Smith" onClick={handleInputChange}>Granny Smith</Dropdown.Item>
            <Dropdown.Item name="Golden Delicious" onClick={handleInputChange}>Golden Delicious</Dropdown.Item>
            <Dropdown.Item name="Gala" onClick={handleInputChange}>Gala</Dropdown.Item>
            <Dropdown.Item name="Honey Crisp" onClick={handleInputChange}>Honey Crisp</Dropdown.Item>
          </DropdownButton>

          <label>What is your favorite season?</label>
          <DropdownButton id="dropdown-basic-button" title="Season">
            <Dropdown.Item>Spring</Dropdown.Item>
            <Dropdown.Item>Summer</Dropdown.Item>
            <Dropdown.Item>Fall</Dropdown.Item>
            <Dropdown.Item>Winter</Dropdown.Item>
          </DropdownButton>

          <label>What is your favorite type of bread?</label>
          <DropdownButton id="dropdown-basic-button" title="Bread">
            <Dropdown.Item>Sourdough</Dropdown.Item>
            <Dropdown.Item >Wheat</Dropdown.Item>
            <Dropdown.Item>Rye</Dropdown.Item>
            <Dropdown.Item>Pumpernickle</Dropdown.Item>
          </DropdownButton>

          <label>What Hogwards house do you belong to?</label>
          <DropdownButton id="dropdown-basic-button" title="House">
            <Dropdown.Item>Slytherin</Dropdown.Item>
            <Dropdown.Item >Hufflepuff</Dropdown.Item>
            <Dropdown.Item>Ravenclaw</Dropdown.Item>
            <Dropdown.Item>Gryffendor</Dropdown.Item>
          </DropdownButton>

          <label>What is your favorite movie?</label>
          <DropdownButton id="dropdown-basic-button" title="Movie">
            <Dropdown.Item>The Village</Dropdown.Item>
            <Dropdown.Item >Midsommar</Dropdown.Item>
            <Dropdown.Item>Them That Follow</Dropdown.Item>
            <Dropdown.Item>Hereditary</Dropdown.Item>
          </DropdownButton>
        </Dropdown>
      </div>
  )
}


export default Questionaire