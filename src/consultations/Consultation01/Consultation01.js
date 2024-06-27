import "./styles.css";
import avatar from "../../assets/R.jpg";
import Button from "../../components/Button/Button";
import { userData } from "../data";

function Consultation01() {
  const showButton = true; //false - кнопка не активна

  return (
    <div className="consultation01-components">
      {/* Пример работы оператора условного рендеринга - && */}
      {showButton && <Button />}
      {/* 1 способ изменения размеров картинки - добавление стилевого класса тегу img*/}
      <img className="avatar-img" src={avatar} alt="user avatar" />
      {/* 2 способ изменения картинки - добавление обертки */}
      <div>{userData.userName}</div>
      <div className="example-img-container">
        <img id="example-img" src={userData.avatar} alt="example" />
      </div>
    </div>
  );
}

export default Consultation01;