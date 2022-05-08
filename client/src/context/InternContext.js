import React, { createContext } from "react";

const InternContext = createContext();

export const InternProvider = ({ children }) => {
  const interns = [
    {
      id: 1,
      name: "Paul Pintang",
      cname: "paudlp-2134",
      gender: "Male",
      completedTask: 13,
      hours: {
        required: 386,
        pending: 68,
        total: 223,
      },
    },
    {
      id: 2,
      name: "John Ackerman",
      cname: "ackerdlsp-2134",
      gender: "Male",
      completedTask: 33,
      hours: {
        required: 336,
        pending: 38,
        total: 243,
      },
    },
  ];
  return (
    <InternContext.Provider value={{ interns }}>
      {children}
    </InternContext.Provider>
  );
};

export default InternContext;
