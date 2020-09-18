import React from "react";

import FormInput from "src/components/form-input/FormInput";
import FormButton from "src/components/button/FormButton";

import { handleSignInWithGoogle } from "src/firebase/util";

import "src/components/signin/signin.styles.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleSignInSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSignInSubmit}>
          <FormInput
            type="email"
            name="email"
            label="Email"
            value={email}
            onHandleChange={this.handleChange}
            required
          />
          <FormInput
            type="password"
            name="password"
            label="Password"
            value={password}
            onHandleChange={this.handleChange}
            required
          />
          <FormButton type="submit">Sign In</FormButton>
          <FormButton onClick={handleSignInWithGoogle}>
            Sign In With Google
          </FormButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
