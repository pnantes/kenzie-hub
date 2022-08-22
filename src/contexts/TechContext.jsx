import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";
import { UserContext } from "./UserContext";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const [tech, setTech] = useState([]);
  const { user } = useContext(UserContext);

  async function createTech(formData) {
    const token = localStorage.getItem("@TOKEN");

    try {
      const response = await api.post("users/techs", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      setTech([...tech, formData]);
    } catch (error) {
      console.log(formData);
      console.log(error.response.data.message);
    }
  }

  async function getTech() {
    const token = localStorage.getItem("@TOKEN");
    if (token) {
      try {
        const response = await api.get("profile", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        console.log(response.data.techs);
        setTech(response.data.techs);
      } catch (error) {
        console.log(error.response.data.message);
      }
    }
  }

  async function removeTech(id) {
    try {
      const response = await api.delete(`users/techs/:${id}`);
      console.log("item excluido");
      const newList = tech.filter((techItem) => techItem.id !== id);
      setTech(newList);
    } catch (error) {
      console.log(error.response.data.error);
    }
  }

  return (
    <TechContext.Provider
      value={{
        tech,
        createTech,
        getTech,
        removeTech,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
