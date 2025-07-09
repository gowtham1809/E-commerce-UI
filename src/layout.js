import React, { useState } from "react";
import styles from "./layout.module.scss";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectAuthUser } from "./context/auth/selector";
import { actions } from "./pages/slice/slice";

const Layout = () => {
  const navigate = useNavigate();
  const user = useSelector(selectAuthUser);
  const dispatch = useDispatch();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleAvatarClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    dispatch(actions.logout());
    setShowDropdown(false);
    navigate("/login");
  };

  return (
    <div>
      <div className={styles.container}>
        <p onClick={() => navigate("/home")} className={styles.home}>
          Home
        </p>
        <div className={styles.left_part}>
          {user ? (
            <>
              <Link to="/cards">Cards</Link>
              <div className={styles.user_info}>
                <span>Welcome, {user.name || "User"}</span>
                <div className={styles.avatar_container}>
                  <div className={styles.avatar} onClick={handleAvatarClick}>
                    {user.name ? user.name[0].toUpperCase() : "U"}
                  </div>
                  {showDropdown && (
                    <div className={styles.dropdown}>
                      <div
                        className={styles.dropdown_item}
                        onClick={handleLogout}
                      >
                        Logout
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </>
          ) : (
            <>
              <Link to="/login">LOGIN</Link>
              <Link to="/signup">SIGN UP</Link>
            </>
          )}
        </div>
      </div>
      <div className={styles.main}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
