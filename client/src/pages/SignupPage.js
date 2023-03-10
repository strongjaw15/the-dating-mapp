import { useState } from "react";
import { Modal } from "../components";
import { Questionaire } from "../components";
import '../styles/signup.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SignupPage = (props) => {
  const defForm = {
    email: "",
    fname: "",
    username: "",
    zipcode: "",
    password: "",
    confirmPassword: "",
  };
  const [formData, setFormData] = useState(defForm);
  const [signupResult, setSignupResult] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setMessage(`passwords don't match`);
      openModal();
    } else if (
      formData.email === "" ||
      formData.fname === "" ||
      formData.username === "" ||
      formData.zipcode === "" ||
      formData.password === "" ||
      formData.confirmPassword === ""
    ) {
      setMessage(`please fill out all forms`);
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
    <>
    
      <h1>give us the deets</h1>

      {showModal ? <Modal message={message} closeModal={closeModal} /> : null}
      <Container>
      <form className="form mb-3">
        <Row>
          <Col sm={12} lg={6} className='flex justify-content-center'>
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="user@email.com"
                className="form-control"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                name="fname"
                placeholder="Robin"
                className="form-control"
                value={formData.username}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                name="username"
                placeholder="username"
                className="form-control"
                value={formData.username}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>Zipcode</label>
              <input
                type="number"
                name="zipcode"
                placeholder="12345"
                className="form-control"
                value={formData.username}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                className="form-control"
                value={formData.confirmPassword}
                onChange={handleInputChange}
              />
            </div>
          </Col>
          <Col sm={12} lg={6}>
            <Questionaire />
          </Col>
        </Row>

        <div className="form-group mt-2">
          <button className="btn btn-primary" onClick={handleFormSubmit}>
            Sign Me Up!
          </button>
        </div>
      </form>

      {signupResult === "success" && (
        <div className="alert alert-success" role="alert">
          Signup successful!
        </div>
      )}

      {signupResult === "fail" && (
        <div className="alert alert-danger" role="alert">
          Signup failed!
        </div>
      )}
      </Container>
    </>
  );
};

export default SignupPage;
