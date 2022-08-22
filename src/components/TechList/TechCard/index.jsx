import Bin from "../../../assets/bin.svg";

export const TechCard = ({ techItem }) => {
  return (
    <div>
      <h1>{techItem.title}</h1>

      <div>
        <p>{techItem.status}</p>
        <figure>
          <img src={Bin} alt="Remover" />
        </figure>
      </div>
    </div>
  );
};
