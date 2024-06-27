import "./styles.css";
import gommer from "../../assets/gomer.jpeg";

function Card() {
  return (
    <div className="card">
      <img className="avatar avatar-img" src={gommer} alt="Фото Гоммера" />
      <h2 className="name">Гомер Симсон</h2>
      <p className="job">род деятельности: программист</p>
      <p className="hobby">хобби: пить пиво</p>
    </div>
  );
};

export default Card;