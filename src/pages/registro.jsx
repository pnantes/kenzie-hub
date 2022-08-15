import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import Logo from "../assets/register.svg";

import Form from "../components/Form";
import { Header } from "../components/Header";
import formSchema from "../validators/registerUser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const navigate = useNavigate();

  function registerUser(data) {
    api
      .post("/users", data)
      .then((response) => {
        setTimeout(() => {
          navigate("/login", { replace: true });
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
  function handleClick() {
    navigate("/login", { replace: true });
  }

  return (
    <main>
      <Header>
        <div className="header" pageName={"register"}>
          <img src={Logo} alt="Kenzie Hub Logo" />
          <button onClick={handleClick}>Voltar</button>
        </div>
      </Header>
      <div className="container">
        <h2>Crie sua conta</h2>
        <h4>Rapido e grátis, vamos nessa</h4>
        <Form className="form" onSubmit={handleSubmit(registerUser)}>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            placeholder="Digite aqui seu nome"
            id="name"
            {...register("name")}
          />
          <span>{errors.name?.message}</span>

          <label htmlFor="email">Email</label>
          <input
            type="text"
            placeholder="Digite aqui seu email"
            id="email"
            {...register("email")}
          />
          <span>{errors.email?.message}</span>

          <label htmlFor="password">Senha</label>
          <input
            type="password"
            placeholder="Digite aqui sua senha"
            id="password"
            {...register("password")}
          />
          <span>{errors.password?.message}</span>

          <label htmlFor="confirm-password">Confirmar Senha</label>
          <input
            type="password"
            placeholder="Digite novamente sua senha"
            id="confirm-password"
            {...register("confirmPassword")}
          />
          <span>{errors.confirmPassword?.message}</span>

          <label htmlFor="bio">Bio</label>
          <input
            type="text"
            placeholder="Fale sobre você"
            id="bio"
            {...register("bio")}
          />
          <span>{errors.bio?.message}</span>

          <label htmlFor="contact">Contato</label>
          <input
            type="text"
            placeholder="Opção de contato"
            id="contact"
            {...register("contact")}
          />
          <span>{errors.contact?.message}</span>

          <label htmlFor="course-module">Selecionar módulo</label>
          <select id="course-module" {...register("course_module")}>
            <option value="Primeiro módulo (Introdução ao Frontend)">
              Primeiro Módulo
            </option>
            <option value="Segundo módulo (Frontend Avançado)">
              Segundo Módulo
            </option>
            <option value="Terceiro módulo (Introdução ao Backend)">
              Terceiro Módulo
            </option>
            <option value="Quarto módulo (Backend Avançado)">
              Quarto Módulo
            </option>
          </select>
          <button type="submit">Cadastrar</button>
        </Form>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </main>
  );
}

export default Register;
