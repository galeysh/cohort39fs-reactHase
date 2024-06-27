import "./styles.css";

function Button() {
  const buttonName = "Send";

  // 2 способ задания класса - через функцию
  // const getButtonClass = () => {
  //   return buttonName === "Delete"
  //     ? "button-component delete-button"
  //     : "button-component main-button";
  // };

  //3 способ - замена тернарного опретатора, оператором if
  // const getButttonClass = () => {
  //   if (buttonName === "Delete") {
  //     return "button-component delete-button";
  //   } else {
  //     return "button-component main-button";
  //   }
  // };

  // 4 способ
  const buttonClass =
    buttonName === "Delete"
      ? "delete-button"
      : "main-button";

  // 2 способ задания класса - через функцию
  // return <button className={getButtonClass()}>{buttonName}</button>;

  // 3 способ задания класса - через функцию (if)
  // return <button className={getButttonClass()}>{buttonName}</button>;

  // 4 способ задания класса -
  return <button className={`button-component ${buttonClass}`}>{buttonName}</button>;
}

export default Button;