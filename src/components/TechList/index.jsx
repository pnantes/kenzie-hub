import { useContext } from "react";

export const TechCard = () => {
  const { tech } = useContext(NotesContext);

  return tech.map((techItem) => (
    <TechCard key={techItem.id} techItem={techItem} />
  ));
};
