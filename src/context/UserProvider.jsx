import React, { useEffect, useState } from "react";
import UserContext from "./UserContext";

const UserProvider = ({ children }) => {
  const [Connection, setConnection] = useState(false);

  const getConnection = async () => {
    const CONNECTION_URL = "https://task-list-api-gmc.herokuapp.com/";
    const connection = await fetch(CONNECTION_URL)
      .then((res) => res.json())
      .then(({ connection }) => connection);

    console.log(connection);
    setConnection(connection);
  };

  useEffect(() => {
    getConnection();
  }, []);

  const context = {
    Connection,
  };

  return (
    <UserContext.Provider value={context}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
