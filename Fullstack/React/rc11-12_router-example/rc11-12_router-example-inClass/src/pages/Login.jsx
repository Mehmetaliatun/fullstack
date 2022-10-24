import React from "react";

const Login = () => {
  return (
    <div className="text-center">
      <h3>Username</h3>
      <input type="text" />
      <h3>Password</h3>
      <input type="password" />
      <br />
      <button className="btn btn-danger mt-3">Login</button>
    </div>
  );
};

export default Login;
