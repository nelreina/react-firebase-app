import React, { useEffect, useState } from "react";
// import { collections } from "../firebase";


export const DataContext = React.createContext();

export const OrganizationsProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    
  //   organizationCollection.onSnapshot(organizations => {
  //       let data = [];
  //       organizations.forEach(item => {
  //         data.push({ kvknummer: item.id, ...item.data() });
  //       });
        
  //       setOrganizations(data)
    
  //     })
  }, []);


  return (
    <DataContext.Provider
      value={{
        data
      }}
    >
      {children}
    </DataContext.Provider>
  );
};