import axios from "axios";
import { useState } from "react";

const AddTutorial = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //! 8- Veri gondermek icin olusturuyoruz
    const newTutor = { title: title, description: description };
    //****************-key  -degisken */
    // const newTutor = { title, description };
    //! ikisi ayni oldugunda ayri ayri yazmaya gerek yok.
    addTutorial(newTutor);
    //! 10-bu fonk ile parametre yakalayarak gonderiyoruz
    setTitle("");
    setDescription("");
    //! 11-Bunlar ile submit sonrasi silinme islemi yapiliyor.
  };

  //? POST - CRUD(CREATE)
  const addTutorial = async (newTutor) => {
    const url = "https://cw-axios-example.herokuapp.com/api/tutorials";

    try {
      //! 9- 1. url ikinci post data gonderme yapacagiz su an
      await axios.post(url, newTutor);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container text-center mt-4">
      <h1 className="display-6 text-danger">Add Your Tutorial</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter your title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="desc"
            placeholder="Enter your Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button className="btn btn-danger mb-4">Submit</button>
      </form>
    </div>
  );
};

export default AddTutorial;
