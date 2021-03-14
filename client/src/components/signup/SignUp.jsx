import React, { useState } from "react";

import FormInput from "src/components/form-input/FormInput";
import FormButton from "src/components/button/FormButton";

import { auth, createAuthenticatedUserRef } from "src/firebase/util";

import "src/components/signup/signup.styles.scss";

const SignUp = () => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    displayName: "",
  });

  const { email, password, confirmPassword, displayName } = userCredentials;

  const handleSignUpFormInputChanged = (event) => {
    const { name, value } = event.target;
    setUserCredentials({
      ...userCredentials,
      [name]: value,
    });
  };

  const handleSubmitSignUpForm = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("The passwords do not match!");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      const newUser = { ...user, displayName };
      await createAuthenticatedUserRef(newUser);
      setUserCredentials({
        email: "",
        password: "",
        confirmPassword: "",
        displayName: "",
      });
      console.log(
        `New user created with email: ${newUser.email} on ${newUser.metadata.creationTime}`
      );
    } catch (error) {
      console.log("Error signing up new user:", error);
    }
  };

  return (
    <div className="sign-up">
      <h2>I do not have an account</h2>
      <span>Sign up with your username, email and password</span>
      <form onSubmit={handleSubmitSignUpForm}>
        <FormInput
          type="text"
          name="displayName"
          label="Display Name"
          value={displayName}
          onHandleChange={handleSignUpFormInputChanged}
          required
        />
        <FormInput
          type="email"
          name="email"
          label="Email"
          value={email}
          onHandleChange={handleSignUpFormInputChanged}
          required
        />
        <FormInput
          type="password"
          name="password"
          label="Password"
          value={password}
          onHandleChange={handleSignUpFormInputChanged}
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          label="Confirm Password"
          value={confirmPassword}
          onHandleChange={handleSignUpFormInputChanged}
          required
        />
        <FormButton type="submit" label="SIGN UP" />
      </form>
    </div>
  );
};

export default SignUp;
