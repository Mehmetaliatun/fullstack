import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

const PersonDetail = () => {
  const navigate = useNavigate();

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
        <button onClick={() => navigate("/")} className="btn btn-success me-2">
          Go Home
        </button>
        <button onClick={() => navigate(-1)} className="btn btn-warning">
          Go Back
        </button>
        {/* -1 diyerek history'de kayitli bir onceki yere gidiyoruz */}
      </div>
    </div>
  );
};

export default PersonDetail;
