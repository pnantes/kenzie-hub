import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ILoginUser, UserContext } from "../contexts/UserContext";
import formSchema from "../validators/loginUser";
import { Header, ContainerCenter } from "../components/Header";
import { P, LargeButton, Form, TitleForm } from "../components/Form";

const logo = require("../assets/login.svg") as string;

function Login() {
  const { setUser, loginUser, backToRegister } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginUser>({
    resolver: yupResolver(formSchema),
  });

  return (
    <main>
      <Header pageName="login">
        <div className="header">
          <img src={logo} alt="Kenzie Hub Logo" />
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
          <LargeButton buttonStyle={"signup"} onClick={backToRegister}>
            Cadastre-se
          </LargeButton>
        </ContainerCenter>
      </div>
    </main>
  );
}

export default Login;
