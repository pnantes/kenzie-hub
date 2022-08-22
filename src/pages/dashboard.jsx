import Logo from "../assets/dashboard.svg";
import AddTech from "../assets/addTech.svg";
import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Nav } from "../components/Header";
import { Container } from "../components/Dashboard";
import { UserContext } from "../contexts/UserContext";
import { AddModal } from "../components/AddModal";

function Dashboard() {
  const navigate = useNavigate();
  const { user, loading } = useContext(UserContext);

  function handleClick() {
    localStorage.clear();
    navigate("/", { replace: true });
  }

  if (loading) {
    return <div>Carregando...</div>;
  } else {
    return user ? (
      <div className="body">
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
            <h1>Tecnologias</h1>
            <figure>
              <img src={AddTech} alt="Add Tech" />
            </figure>
            <AddModal />
          </main>
        </Container>
      </div>
    ) : (
      <Navigate to="/login" replace />
    );
  }
}
export default Dashboard;
