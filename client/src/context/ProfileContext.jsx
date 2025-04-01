import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/profiles").then((res) => setProfiles(res.data));
  }, []);

  return (
    <ProfileContext.Provider value={{ profiles }}>
      {children}
    </ProfileContext.Provider>
  );
};
