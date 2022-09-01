import api from "../services/api";
import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ReactNode } from "react";
import { SubmitHandler } from "react-hook-form";

interface IUserProviderProps {
  children: ReactNode;
}

interface ITech {
  id: string;
  title: string;
  status: string;
  created_at: Date;
  updated_at: Date;
}

interface IWork {
  id: string;
  title: string;
  description: string;
  deploy_url: string;
  created_at: Date;
  updated_at: Date;
}

export interface ILoginUser {
  email: string;
  password: string;
}

export interface IRegisterUser {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  bio: string;
  contact: string;
  course_module: string;
}

interface IUser {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  created_at: Date;
  updated_at: Date;
  techs: ITech[];
  works: IWork[];
  avartar_url: string;
}

interface IUserContext {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  loginUser: SubmitHandler<ILoginUser>;
  backToRegister: () => void;
  backToLogin: () => void;
  registerUser: SubmitHandler<IRegisterUser>;
  loading: boolean;
}

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function backToRegister() {
    navigate("/registro", { replace: true });
  }

  function backToLogin() {
    navigate("/", { replace: true });
  }

  function loginUser(data: ILoginUser) {
    api
      .post("/sessions", data)
      .then((response) => {
        setUser(response.data.user);
        localStorage.setItem("@USERID", response.data.user.id);
        localStorage.setItem("@TOKEN", response.data.token);

        toast.success("Login efetuado com sucesso!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setTimeout(() => {
          navigate("/dashboard", { replace: true });
        }, 3000);
      })
      .catch((err) => {
        toast.error(`${err.response.data.message}`);
      });
  }

  function registerUser(data: IRegisterUser) {
    api
      .post("/users", data)
      .then((response) => {
        setTimeout(() => {
          navigate("/", { replace: true });
        }, 3000);

        toast.success("Conta criada com sucesso!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((err) => {
        console.log(err);
        toast.error(`${err.response.data.message}`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  }

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("@TOKEN");

      if (token) {
        try {
          api
            .get("profile", {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
            })
            .then((res) => {
              setUser(res.data);
              navigate("/dashboard");
            });
        } catch (error) {
          console.error(error);
        }
      } else {
        navigate("/");
      }
    }
    loadUser();
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        loginUser,
        backToRegister,
        backToLogin,
        registerUser,
        loading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
