import { bicyclesData } from "../../data/index.js";
import { Button } from "../../components/button";
import { CardHome } from "../../components/bicycle-card/CardHome/index.jsx";
import imageOne from "../../assets/fotos/introducao.jpg";
import "./style.css";

export const Home = () => {
  return (
    <div>
      <main className="introduction-bg">
        <div className="container introduction">
          <div className="introduction-content">
            <h1 className="font-1-xxl">
              Bicicletas feitas sob medida<span className="point">.</span>
            </h1>
            <p className="font-2-l">
              Bicicletas elétricas de alta precisão e qualidade, feitas sob
              medida para o cliente. Explore o mundo na sua velocidade com a
              Bikcraft.
            </p>

            <Button url="" title="Escolha a sua" />
          </div>
          <div className="introduction-img">
            <img src={imageOne} alt="" />
          </div>
        </div>
      </main>
      <article>
        {bicyclesData.map((bicycle) => (
          <CardHome
            url={bicycle.url}
            title={bicycle.name}
            image={bicycle["image-small-1"]}
            price={bicycle.price}
          />
        ))}
      </article>
    </div>
  );
};
