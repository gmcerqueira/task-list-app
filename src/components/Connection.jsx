import React, { useContext } from "react";
import UserContext from "../context/UserContext.jsx";

const Connection = () => {
  const { Connection } = useContext(UserContext);
  return <div>{`Data base connection: ${Connection ? "ok" : "waiting"}`}</div>;
};

export default Connection;
