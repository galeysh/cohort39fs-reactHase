import "./styles.css";

function Button({ type = "button",onClick, name = "Send" }) {
   
  return (
    <button onClick={onClick} type={type} className="button-component" >
      {name}
    </button>
  );
}

export default Button;
