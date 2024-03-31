import { Link } from "react-router-dom";
import "./style.css"

export const Button = ({ url, title }) => {
  return (
    <Link to={url}>
      <button type="button" className="button">
        {title}
      </button>
    </Link>
  );
};
