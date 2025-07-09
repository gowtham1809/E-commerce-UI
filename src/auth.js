import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  authActions,
  selectIsAuthenticated,
  selectAuthLoading,
} from "./context/auth";

const AuthenticateUser = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const loading = useSelector(selectAuthLoading);

  useEffect(() => {
    dispatch(authActions.checkAuth());
  }, [dispatch]);

  useEffect(() => {
    if (
      isAuthenticated &&
      (location.pathname === "/login" || location.pathname === "/")
    ) {
      navigate("/home");
    } else if (!isAuthenticated && !loading) {
      navigate("/login");
    }
  }, [isAuthenticated, loading, location.pathname, navigate]);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div>Loading...</div>
      </div>
    );
  }

  return isAuthenticated ? <Outlet /> : null;
};

export default AuthenticateUser;
