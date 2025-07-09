import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from './login.module.scss'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { actions } from "../slice/slice";
import { selectError, selectFetchingLogin, selectUser } from "../slice/selector";
const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const LoginPage = () => {
  const dispatch = useDispatch();
  
  const user = useSelector(selectUser)
  const fetchingLogin = useSelector(selectFetchingLogin)
  const error=useSelector(selectError)
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema), 
  });
  
  const onSubmit = (data) => {
    console.log("Login Data:", data);
    dispatch(actions.login(data))
  };
  if(fetchingLogin)
    return <h1>Loading...</h1>

  return (
    <div className={styles.container}>
      <div>
        <h2>Login</h2>

        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          {/* Email Field */}
          <label>Email:</label>
          <input
            type="email"
            {...register("email")}
            placeholder="Enter your email"
            className={styles.input}
          />
          <p className={styles.error}>{errors.email?.message}</p>
          {/* Password Field */}
          <label>Password:</label>
          <input
            type="password"
            {...register("password")}
            placeholder="Enter your password"
            className={styles.input}
          />
          <p className={styles.error}>{errors.password?.message}</p>
          {/* Submit Button */}
          <button type="submit" className={styles.button}>
            Login
          </button>
          <p>
            Don't have an Account <Link to="/signup">{"signup ->"}</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
