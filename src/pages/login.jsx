import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

// import Form from "../components/Form";
// import Header from "../components/Header";
// import formSchema from "../validators/loginUser";

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
      <Header>
        <h1>Kenzie Hub</h1>
      </Header>
      <div className="container">
        <h2>Login</h2>

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

          <button type="submit">Entrar</button>
        </Form>

        <p>Ainda não possui uma conta?</p>
        <button onClick={handleClick}>Cadastre-se</button>
      </div>
    </main>
  );
}

export default Login;
