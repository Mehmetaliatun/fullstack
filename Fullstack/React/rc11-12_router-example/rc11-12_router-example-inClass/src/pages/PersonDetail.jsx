import React from "react";
import { useParams, useLocation } from "react-router-dom";

const PersonDetail = () => {
  const { id } = useParams();
  console.log(id);

  const { state: person } = useLocation();
  //   ! gonderirken state fakat burada bu sekilde yeni bir atama yapilabilir.
  console.log(person);
  return (
    <div className="container text-center">
      <h3>
        {person.first_name} {person.last_name}
      </h3>
      <img className="rounded-circle" src={person.avatar} alt="" />

      <p>{person.email}</p>
      <div>
        <button className="btn btn-success me-2">Home</button>
        <button className="btn btn-warning">Go Back</button>
      </div>
    </div>
  );
};

export default PersonDetail;
