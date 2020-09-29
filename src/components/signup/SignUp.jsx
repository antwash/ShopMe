import React from "react";

import FormInput from "src/components/form-input/FormInput";
import FormButton from "src/components/button/FormButton";

import { auth, createAuthenticatedUserRef } from "src/firebase/util";

import "src/components/signup/signup.styles.scss";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      displayName: "",
    };
  }

  handleSignUpFormInputChanged = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmitSignUpForm = async (event) => {
    event.preventDefault();

    const { email, password, confirmPassword, displayName } = this.state;

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
      this.setState({
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

  render() {
    const { email, displayName, password, confirmPassword } = this.state;

    return (
      <div className="sign-up">
        <h2>I do not have an account</h2>
        <span>Sign up with your username, email and password</span>
        <form onSubmit={this.handleSubmitSignUpForm}>
          <FormInput
            type="text"
            name="displayName"
            label="Display Name"
            value={displayName}
            onHandleChange={this.handleSignUpFormInputChanged}
            required
          />
          <FormInput
            type="email"
            name="email"
            label="Email"
            value={email}
            onHandleChange={this.handleSignUpFormInputChanged}
            required
          />
          <FormInput
            type="password"
            name="password"
            label="Password"
            value={password}
            onHandleChange={this.handleSignUpFormInputChanged}
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            label="Confirm Password"
            value={confirmPassword}
            onHandleChange={this.handleSignUpFormInputChanged}
            required
          />
          <FormButton type="submit" label="SIGN UP" />
        </form>
      </div>
    );
  }
}

export default SignUp;
