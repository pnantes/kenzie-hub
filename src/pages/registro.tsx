import { useForm } from "react-hook-form";
import { useContext } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import formSchema from "../validators/registerUser";
import { Header } from "../components/Header";
import { SubTitle, LargeButton, Form, TitleForm } from "../components/Form";
import { IRegisterUser, UserContext } from "../contexts/UserContext";
import { ToastContainer } from "react-toastify";

const logo = require("../assets/register.svg") as string;

function Register() {
  const { backToLogin, registerUser } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterUser>({
    resolver: yupResolver(formSchema),
  });

  return (
    <main>
      <Header pageName="register">
        <div className="header">
          <img src={logo} alt="Kenzie Hub Logo" />
          <button onClick={backToLogin}>Voltar</button>
        </div>
      </Header>
      <div className="container">
        <TitleForm>Crie sua conta</TitleForm>
        <SubTitle>Rapido e grátis, vamos nessa</SubTitle>

        <Form onSubmit={handleSubmit(registerUser)}>
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
          <LargeButton buttonStyle="sign" type="submit">
            {" "}
          </LargeButton>
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
