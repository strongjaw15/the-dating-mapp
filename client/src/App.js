import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import cookie from "js-cookie";
import { Header, Wrapper, Footer, Maps, Questionaire } from "./components";

import {
  HomePage,
  LoginPage,
  ProfilePage,
  SignupPage,
  GetConnected,
} from "./pages";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/global.css";

function App() {
  const [user, setUser] = useState(null);

  const verifyUser = async () => {
    const authCookie = cookie.get("auth-token");
    if (authCookie) {
      const query = await fetch("/api/user/verify", {
        method: "post",
        body: JSON.stringify({}),
        headers: {
          "Content-Type": "application/json",
          "Auth-Token": authCookie,
        },
      });
      const result = await query.json();
      if (result) {
        console.log(result)
        setUser(result);
      }
    }
  };

  useEffect(() => {
    verifyUser();
  }, []);

  return (
    <BrowserRouter>
      <Wrapper>
        <Header user={user} />
        <Routes>
          <Route path="/" element={<HomePage user={user} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage user={user} />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/get-connected" element={<GetConnected user={user} />} />
        </Routes>
        <Footer />
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
