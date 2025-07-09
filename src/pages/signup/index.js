import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from './signup.module.scss';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../slice/slice";
import { selectFetchingSignup, selectSignup, selectSignupError } from "../slice/selector";
const schema = yup.object().shape({
  fullName: yup
    .string()
    .min(3, "Full Name must be at least 3 characters")
    .required("Full Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const SignUpPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signupSuccess = useSelector(selectSignup);
  const fetchingSignup = useSelector(selectFetchingSignup)
  const signupError = useSelector(selectSignupError)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema), // Connect yup schema
  });

  useEffect(() => {
    if (signupSuccess==="Created")
    navigate("/login")
  }, [dispatch, signupSuccess])
  
  const onSubmit = (data) => {
    dispatch(actions.signup(data))
      // axios.post("http://localhost:5000/api/auth/signUp",data)
      //     .then(res => {
      //     console.log(res);
          
      //     })
      //   .then(() =>
      //     navigate("/login")
      //   );
  };

  return (
    <div className={styles.container}>
      <h2>Sign Up</h2>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <label>Full Name:</label>
        <input
          type="text"
          {...register("fullName")}
          placeholder="Enter your full name"
          className={styles.input}
        />
        <p className={styles.error}>{errors.fullName?.message}</p>

        <label>Email:</label>
        <input
          type="email"
          {...register("email")}
          placeholder="Enter your email"
          className={styles.input}
        />
        <p className={styles.error}>{errors.email?.message}</p>

        <label>Password:</label>
        <input
          type="password"
          {...register("password")}
          placeholder="Enter your password"
          className={styles.input}
        />
        <p className={styles.error}>{errors.password?.message}</p>

        <label>Confirm Password:</label>
        <input
          type="password"
          {...register("confirmPassword")}
          placeholder="Confirm your password"
          className={styles.input}
        />
        <p className={styles.error}>{errors.confirmPassword?.message}</p>

        <button type="submit" className={styles.button}>
          Sign Up
        </button>
        <p> Already Have an Account! <Link to={"/login"}> Login</Link></p>
      </form>
    </div>
  );
};

export default SignUpPage;
