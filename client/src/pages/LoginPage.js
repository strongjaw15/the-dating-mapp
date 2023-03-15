import { useState } from "react";
import cookie from "js-cookie";
import { Modal } from "../components";
import "../styles/signup.css";

const LoginPage = () => {
  const defForm = { email: "", password: "" };
  const [formData, setFormData] = useState(defForm);
  const [loginResult, setLoginResult] = useState("");
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
    const query = await fetch("/api/user/auth", {
      method: "post",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await query.json();

    if (result && !result.err && result.data && result.data.token) {
      setLoginResult("success");
      cookie.set("auth-token", result.data.token, { expires: 3 });
      window.location.href = "/get-connected";
    } else {
      setMessage(`Please enter valid login credentials.`);
      openModal();
    }
  };

  return (
    <div className="login-box">
      <div className="mt-5 mb-5 login-form animate__animated animate__fadeIn animate__delay-1s">
        <h1>Login Page</h1>

        {showModal ? <Modal message={message} closeModal={closeModal} /> : null}

        <form className="form mt-4 mb-3">
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="text"
              name="email"
              placeholder="user@email.com"
              className="form-control"
              value={formData.email}
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

          <div className="form-group mt-2">
            <button className="btn btn-primary" onClick={handleFormSubmit}>
              Log Me In!
            </button>
          </div>
        </form>

        {loginResult === "success" && (
          <div className="alert alert-success" role="alert">
            Login successful!
          </div>
        )}

        {loginResult === "fail" && (
          <div className="alert alert-danger" role="alert">
            Login failed!
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
