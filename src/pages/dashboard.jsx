import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
// import api from "../services/api";
import { useState } from "react";
import { Nav } from "../components/Header";
import Logo from "../assets/dashboard.svg";
import { Container } from "../components/Dashboard";

function Dashboard({ user, setUser }) {
  const [loading, setLoading] = useState();
  const navigate = useNavigate();

  function handleClick() {
    localStorage.clear();
    navigate("/login", { replace: true });
  }

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("@TOKEN");

      if (!token) {
        navigate("/login", { replace: true });
        localStorage.clear();

        // try {
        //   api
        //     .get("/profile", {
        //       headers: {
        //         Authorization: `Bearer ${token}`,
        //         "Content-Type": "application/json",
        //       },
        //     })
        //     .then((res) => console.log(res.data));
        //   setUser(data);
        // } catch (error) {
        //   console.error(error);
        // }
      }
      setLoading(false);
    }
    loadUser();
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  } else {
    return user ? (
      <body>
        <Nav className="dashboard">
          <Container>
            <img src={Logo} alt="Kenzie Hub Logo" />{" "}
            <button onClick={handleClick}>Sair</button>
          </Container>
        </Nav>
        <header className="dashboard">
          <Container>
            <h1>Olá, {user?.name}</h1> <h5>{user?.course_module}</h5>
          </Container>
        </header>
        <Container>
          <main>
            <h1>Que pena! Estamos em desenvolvimento</h1>
            <p>
              Nossa aplicação está em desenvolvimento, em breve teremos
              novidades
            </p>
          </main>
        </Container>
      </body>
    ) : (
      <Navigate to="/login" replace />
    );
  }
}
export default Dashboard;
