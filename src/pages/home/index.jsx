import { Link } from "react-router-dom";

import imageOne from "../../assets/fotos/introducao.jpg";
import "./style.css";

export const Home = () => {
  return (
    <main className="introduction-bg">
      <div className="container introduction">
        <div className="introduction-content">
          <h1>
            Bicicletas feitas sob medida<span className="point">.</span>
          </h1>
          <p>
            Bicicletas elétricas de alta precisão e qualidade, feitas sob medida
            para o cliente. Explore o mundo na sua velocidade com a Bikcraft.
          </p>
          <Link to="" className="button">Escolha a sua</Link>
        </div>
        <img src={imageOne} alt="" width="" height="" />
      </div>
    </main>
  );
};
