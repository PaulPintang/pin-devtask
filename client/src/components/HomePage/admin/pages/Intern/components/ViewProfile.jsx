import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import InternContext from "../../../../../../context/InternContext";

const ViewProfile = () => {
  const { interns } = useContext(InternContext);
  let { cname } = useParams();
  const filtered = interns.filter((codename) => codename.cname === cname);
  console.log(filtered);
  return (
    <div>
      {filtered.map((intern) => (
        <div>
          <h1>Profile ID: {cname}</h1>
          <p>{intern.name}</p>
        </div>
      ))}
    </div>
  );
};

export default ViewProfile;
