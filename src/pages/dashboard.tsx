import { useContext, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Nav } from "../components/Header";
import { Container } from "../components/Dashboard";
import { UserContext } from "../contexts/UserContext";
import { AddModal } from "../components/AddModal";
import { TechContext } from "../contexts/TechContext";
import { TechList } from "../components/TechList";

const Logo = require("../assets/dashboard.svg") as string;
const AddTech = require("../assets/addTech.svg") as string;

function Dashboard() {
  const navigate = useNavigate();
  const { user, loading } = useContext(UserContext);
  const { tech, getTech } = useContext(TechContext);

  useEffect(() => {
    getTech();
  }, []);

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
            <TechList />
          </main>
        </Container>
        <AddModal />
      </div>
    ) : (
      <Navigate to="/login" replace />
    );
  }
}
export default Dashboard;
