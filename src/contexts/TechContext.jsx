import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";
import { UserContext } from "./UserContext";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const [tech, setTech] = useState([]);
  const { user } = useContext(UserContext);

  async function createTech(formData) {
    try {
      const response = await api.post("users/techs", formData);

      console.log(response.data);

      setTech([...tech, formData]);
    } catch (error) {
      console.log(formData);
      console.log(error.response.data.message);
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");

    async function getTech() {
      if (token) {
        try {
          const response = await api.get("profile", {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          });
          setTech(response.data.techs);
        } catch (error) {
          console.log(error.response.data.message);
        }
      }
    }
    if (user && token) {
      getTech();
    } else {
      setTech([]);
    }
  }, [user]);

  return (
    <TechContext.Provider
      value={{
        tech,
        createTech,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
