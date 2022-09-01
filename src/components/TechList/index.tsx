import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";
import { TechCard } from "./TechCard";

export const TechList = () => {
  const { tech } = useContext(TechContext);

  return (
    <>
      {tech.map((techItem) => (
        <TechCard key={techItem.id} techItem={techItem} />
      ))}
    </>
  );
};
