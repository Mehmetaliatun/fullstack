import React from "react";
import { useParams, useLocation } from "react-router-dom";

const PersonDetail = () => {
  const { id } = useParams();
  console.log(id);

  const { state: person } = useLocation();
  //   ! gonderirken state fakat burada bu sekilde yeni bir atama yapilabilir.
  console.log(person);
  return <div>PersonDetail</div>;
};

export default PersonDetail;
