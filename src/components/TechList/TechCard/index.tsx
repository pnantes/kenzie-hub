import { useContext } from "react";
import { ITech, TechContext } from "../../../contexts/TechContext";

const Bin = require("../../../assets/bin.svg") as string;

interface ITechCardProps {
  techItem: ITech;
}

export const TechCard = ({ techItem }: ITechCardProps) => {
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
