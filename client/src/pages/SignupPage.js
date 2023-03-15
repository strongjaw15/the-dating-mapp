import { useState } from "react";
import { Modal } from "../components";
import { Questionaire } from "../components";
import "../styles/signup.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import 'animate.css';

const SignupPage = (props) => {
  const defForm = {
    email: "",
    name: "",
    username: "",
    zipCode: "",
    password: "",
    confirmPassword: "",
  };

  const [formData, setFormData] = useState(defForm);
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");
  const [signupResult, setSignupResult] = useState("");

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      {/* <h1>give us the deets</h1> */}

      {showModal ? <Modal message={message} closeModal={closeModal} /> : null}
      <Container>
        <form className="form mt-5 mb-5">
          <Row>
            <Col sm={12} lg={5} className="signup-form animate__animated animate__fadeInDown animate__delay-1s">
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
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Robin"
                  className="form-control"
                  value={formData.name}
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
                  name="zipCode"
                  placeholder="12345"
                  className="form-control"
                  value={formData.zipCode}
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
            <Col sm={12} lg={6} className="signup-form animate__animated animate__fadeInUp animate__delay-1s">
              <Questionaire
                formData={formData}
                openModal={openModal}
                setMessage={setMessage}
                setSignupResult={setSignupResult}
              />
            </Col>
          </Row>
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
    </div>
  );
};

export default SignupPage;
