import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Layout from "../layout";
import LoginPage from "../pages/login";
import SignUpPage from "../pages/signup";
import AuthenticateUser from "../auth";
import Cards from "../pages/cards";

const Router = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="signup" element={<SignUpPage />} />
      <Route path="/" element={<AuthenticateUser />}>
        <Route element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="cards" element={<Cards />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Router;
