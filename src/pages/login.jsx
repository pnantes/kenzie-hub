import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import Logo from "../assets/login.svg";

import { Header, ContainerCenter } from "../components/Header";
import { P, LargeButton, Form, TitleForm } from "../components/Form";
import formSchema from "../validators/loginUser";

function Login({ setUser }) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  function loginUser(data) {
    api
      .post("/sessions", data)
      .then((response) => {
        setUser(response.data.user);
        localStorage.setItem("@TOKEN", JSON.stringify(response.data.token));
        navigate("/dashboard", { replace: true });
      })
      .catch((err) => console.log(err));
  }

  function handleClick() {
    navigate("/registro", { replace: true });
  }

  return (
    <main>
      <Header pageName={"login"}>
        <div className="header">
          <img src={Logo} alt="Kenzie Hub Logo" />
        </div>
      </Header>
      <div className="container">
        <TitleForm> Login </TitleForm>

        <Form className="form" onSubmit={handleSubmit(loginUser)}>
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

          <LargeButton buttonStyle={"login"} type="submit">
            Entrar
          </LargeButton>
        </Form>

        <ContainerCenter>
          <P>Ainda não possui uma conta?</P>
          <LargeButton buttonStyle={"signup"} onClick={handleClick}>
            Cadastre-se
          </LargeButton>
        </ContainerCenter>
      </div>
    </main>
  );
}

export default Login;
