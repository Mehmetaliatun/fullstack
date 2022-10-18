import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";
import EditTutorial from "./EditTutorial";

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

    const { id, title, description } = item;

    const url = "https://cw-axios-example.herokuapp.com/api/tutorials";
    try {
      await axios.put(`${url}/${id}`, { title, description });
    } catch (error) {
      console.log(error);
    }
    getTutorials();
  };

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
                    data-bs-toggle="modal"
                    data-bs-target="#edit-modal"
                    //*19-bu ikiliyi ekliyoruz edit icin
                    className="me-2 text-warning"
                    onClick={() =>
                      editTutorial({
                        id: "1057",
                        title: "ANKARA",
                        description: "GÜCÜ",
                      })
                    }
                    //*18- edit icin
                    //! id:"1234", title:"update", description:"update"
                  />
                  <AiFillDelete
                    size={22}
                    type="button"
                    className="text-danger "
                    onClick={() => deleteTutorial(id)}
                    //!14- silme islemi icin onClick ekliyoruz ve func yolla
                    //! arrow func olmali cunku surekli render etmiyor
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <EditTutorial />
    </div>
  );
};

export default TutorialList;
