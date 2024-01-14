import React, { createContext, useState } from "react";

export const DataContext = createContext();

function DataProvider({ children }) {
  const [userData, setUserData] = useState({});

  function setUser(Data) {
    setUserData({
      name: Data ? Data.name : null,
      email: Data ? Data.email : null,
    });
  }

  return (
    <>
      <DataContext.Provider value={{ userData, setUser }}>
        {children}
      </DataContext.Provider>
    </>
  );
}

export default DataProvider;
