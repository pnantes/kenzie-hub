import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import api from "../services/api";
import { UserContext } from "./UserContext";
import { toast, ToastContainer } from "react-toastify";
import { SubmitHandler } from "react-hook-form";

interface ITechProviderProps {
  children: ReactNode;
}

export interface ITech {
  id: string;
  title: string;
  status: string;
  created_at: Date;
  updated_at: Date;
}

interface ITechContext {
  tech: ITech[];
  createTech: SubmitHandler<ITech>;
  getTech: () => void;
  removeTech: (id: string) => void;
}

export const TechContext = createContext({} as ITechContext);

export const TechProvider = ({ children }: ITechProviderProps) => {
  const [tech, setTech] = useState<ITech[]>([] as ITech[]);
  const { user } = useContext(UserContext);

  async function createTech(formData: ITech) {
    const token = localStorage.getItem("@TOKEN");

    try {
      const response = await api.post("users/techs", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      toast.success("Tech criada com sucesso");
      setTech([...tech, formData]);
    } catch (error: any) {
      toast.error(error.response.data.message);
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
        setTech(response.data.techs);
      } catch (error: any) {
        toast.error(error.response.data.message);
      }
    }
  }

  async function removeTech(id: string) {
    try {
      const token = localStorage.getItem("@TOKEN");
      const response = await api.delete(`users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      toast.success("Tech excluída");

      const newList = tech.filter((techItem) => techItem.id !== id);
      setTech(newList);
    } catch (error: any) {
      toast.error(error.message);
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
