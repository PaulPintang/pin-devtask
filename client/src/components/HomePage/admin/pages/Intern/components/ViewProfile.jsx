import React from "react";
import { useParams } from "react-router-dom";

const ViewProfile = () => {
  let { id } = useParams();
  return (
    <div>
      <h1>Profile ID: {id}</h1>
      {/* <h1>Name: {name}</h1> */}
    </div>
  );
};

export default ViewProfile;
