import React from "react";

import FormInput from "src/components/form-input/FormInput";
import FormButton from "src/components/button/FormButton";

import { auth, handleSignInWithGoogle } from "src/firebase/util";

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
  handleSignInSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(`Error signing user in with email ${email}`, error);
    }
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
  }
}

export default SignIn;
