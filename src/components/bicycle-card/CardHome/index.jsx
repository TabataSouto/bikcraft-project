import { Link } from "react-router-dom";

export const CardHome = ({ url, image, title, price }) => {
  return (
    <Link to={`/bicycle/${url}`} style={{ cursor: "pointer"}}>
      <div>
        <img src={image} alt="bicicleta" />
        <h3 className="font-1-xl">{title}</h3>
        <p className="font-2-m cor-8">{price}</p>
      </div>
    </Link>
  );
};
