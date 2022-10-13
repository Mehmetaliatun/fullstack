import { useState } from "react";

const Form = () => {
  const [username, setUsername] = useState("Mehmet");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    console.log("Subbmitted");
    alert(`username: ${username}
    email:,
    password:
    `);
  };
  const handleUserName = (e) => {
    console.log(e.target.value);
    setUsername(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="display-5 text-danger">FORMS</h1>

      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username: <span>{username} </span>
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          value={username}
          onChange={handleUserName}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input type="email" className="form-control" id="email" />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input type="password" className="form-control" id="password" />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
