import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";

//? DELETE-(CRUD-Delete)
//! tutorials ve settutorials'i buraya props olarak yolladik
const TutorialList = ({ tutor, getTutorials }) => {
  const deleteTutorial = async (id) => {
    //!15-silme islemi icin func olustur
    //!async ekleyip id ile silme islemi olacagi icin parametre id
    const url = "https://cw-axios-example.herokuapp.com/api/tutorials";
    try {
      await axios.delete(`${url}/${id}`);
    } catch (error) {
      console.log(error);
    }
    getTutorials();
  };

  //? PUT-(CRUD-Update)
  //!PUT:whole update(tum veri), PATCH:partially update(ilgili kisim)
  const editTutorial = async (item) => {
    //!19-duzenleme islemi icin func olustur

    const url = "https://cw-axios-example.herokuapp.com/api/tutorials";
    try {
      await axios.put(`${url}/${item.id}`);
    } catch (error) {
      console.log(error);
    }
    getTutorials();
  };
  // const tutorials = [
  //   {
  //     id: 1,
  //     title: "JS",
  //     description: "JS is a programming language",
  //   },
  //   {
  //     id: 2,
  //     title: "React",
  //     description: "JS library for UI design",
  //   },
  // ];

  return (
    <div className="container mt-4">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col" className="text-center">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>
          {tutor?.map((item) => {
            const { id, title, description } = item;
            return (
              <tr key={id}>
                <th>{id}</th>
                <td>{title}</td>
                <td>{description}</td>
                <td className="text-center text-nowrap">
                  <FaEdit
                    size={20}
                    type="button"
                    className="me-2 text-warning"
                    onClick={() => editTutorial(item)}
                    //*18- edit icin
                  />
                  <AiFillDelete
                    size={22}
                    type="button"
                    className="text-danger "
                    onClick={() => deleteTutorial()}
                    //!14- silme islemi icin onClick ekliyoruz ve func yolla
                    //! arrow func olmali cunku surekli render etmiyor
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TutorialList;
