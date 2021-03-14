import React, { useState } from "react";

import FormInput from "src/components/form-input/FormInput";
import FormButton from "src/components/button/FormButton";

import { auth, handleSignInWithGoogle } from "src/firebase/util";

import "src/components/signin/signin.styles.scss";

const SignIn = () => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userCredentials;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const handleSignInSubmit = async (event) => {
    event.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setUserCredentials({ email: "", password: "" });
    } catch (error) {
      console.log(`Error signing user in with email ${email}`, error);
    }
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSignInSubmit}>
        <FormInput
          type="email"
          name="email"
          label="Email"
          value={email}
          onHandleChange={handleChange}
          required
        />
        <FormInput
          type="password"
          name="password"
          label="Password"
          value={password}
          onHandleChange={handleChange}
          required
        />
        <div className="buttons">
          <FormButton label={"Sign In"} type="submit" />
          <FormButton
            type="button"
            label={"Sign In With Google"}
            customStyle={"googleSignInButton"}
            onClick={handleSignInWithGoogle}
          />
        </div>
      </form>
    </div>
  );
};

export default SignIn;
