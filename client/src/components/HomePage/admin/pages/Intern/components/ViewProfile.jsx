import React from "react";
import { useParams } from "react-router-dom";

const ViewProfile = () => {
  let params = useParams();
  return (
    <div>
      <h1>{params.id}</h1>
    </div>
  );
};

export default ViewProfile;
