import React from "react";

import SignIn from "src/components/signin/SignIn";
import SignUp from "src/components/signup/SignUp";

import "src/page/auth-page/authpage.styles.scss";

const AuthPage = () => {
  return (
    <div className="auth-page">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default AuthPage;
