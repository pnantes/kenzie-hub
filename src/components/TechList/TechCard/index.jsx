import Bin from "../../../assets/bin.svg";
import { useContext } from "react";
import { TechContext } from "../../../contexts/TechContext";

export const TechCard = ({ techItem }) => {
  const { removeTech } = useContext(TechContext);
  return (
    <div>
      <h1>{techItem.title}</h1>

      <div>
        <p>{techItem.status}</p>
        <figure onClick={() => removeTech(techItem.id)}>
          <img src={Bin} alt="Remover" />
        </figure>
      </div>
    </div>
  );
};
