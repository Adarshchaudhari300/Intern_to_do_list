import React, { useState } from "react";

const LogIn = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const onChange1 = (e) => {
    //sets the value of the screen typed content to variables
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    localStorage.setItem("authToken", "trialToken");
  };
  return (
    <div>
      
      <h1 className="mt-5 mb-3">Log-In</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            <strong>Email address</strong>
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            value={credentials.email}
            onChange={onChange1}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            <strong>Password</strong>
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={credentials.password}
            onChange={onChange1}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LogIn;
