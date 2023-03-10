import { useState } from "react";
import { Modal } from "../components";
import { Questionaire } from "../components";

const SignupPage = (props) => {

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

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
    } else if (
      !emailRegex.test(formData.email)
    ) {
      setMessage(`please enter a valid email address`);
      openModal()
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

      <form className="form mb-3">
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
            value={formData.fname}
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
            value={formData.zipcode}
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

        <Questionaire />

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
    </>
  );
};

export default SignupPage;
