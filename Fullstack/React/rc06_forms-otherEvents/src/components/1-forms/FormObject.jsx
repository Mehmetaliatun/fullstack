import { useState } from "react";

const FormObject = () => {
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
  }); //! state birlestir obje yap.

  const { username, password, email } = formValues; //!destr. yaparak asagiya uyumlu hale getirdik.

  //!useStateSnippet ile otomatik geliyor ve tab ile
  //!2.degiskeni camelCase yapabiliriz.
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    console.log("Subbmitted");
    alert(`username: ${username}
    email:${email}
    password:${password}
    `);
  };

  const handleForm = (e) => {
    console.log(e.target.value);
    console.log(e.target.id);
    //! objeyi actik ve ilgili key'e gelen degeri aktariyoruz.
    //!formValues useState'ten geliyor, id jsx'ten geliyor, value ise dom'dan geliyor.
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="display-5 text-danger">FORMS OBJECT</h1>

      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username: <span className="text-danger">{username} </span>
        </label>
        <input
          name="username"
          type="text"
          className="form-control"
          id="username"
          value={username}
          onChange={handleForm}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email: <span className="text-danger">{email}</span>
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={email}
          onChange={handleForm}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          value={password}
          onChange={handleForm}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default FormObject;
