import api from "../services/api";
import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState();
  const navigate = useNavigate();

  function backToRegister() {
    navigate("/registro", { replace: true });
  }

  function backToLogin() {
    navigate("/", { replace: true });
  }

  function loginUser(data) {
    api
      .post("/sessions", data)
      .then((response) => {
        setUser(response.data.user);
        localStorage.setItem("@USERID", response.data.user.id);
        localStorage.setItem("@TOKEN", response.data.token);

        toast.success("Login efetuado com sucesso!"); //não funcionou :(
        setTimeout(() => {
          navigate("/dashboard", { replace: true });
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
        toast.error(`${err.response.data.message}`);
      });
  }

  function registerUser(data) {
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
      }
      setLoading(false);
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
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
