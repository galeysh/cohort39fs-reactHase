import {useState} from 'react';
import "./styles.css";

import Button from "../Button/Button";

function Counter() {
  //Функция -хук usesate() возвращает массив из 2 элемнтов
  //- 1 элемент - это переменная состояния
  //- 2 элемент - функция, которая меняет это состояние
  //По умолчанию count = undefind, если мы ничего не передадим в качестве аргумента в функцию useState()
  const[count, setCount] = useState(0);

  const onPlus = () => {
    setCount((prevValue)=>{return prevValue+1;});
  };

  const onMinus = () => {
    setCount((prevValue)=>{return prevValue-1;});
  };

  //Старый метод, который тут не работает
  // console.log(state);
  // let counter = 0;
  // const onPlus = () => {
  //   counter+=1;
  // };
  // const onMinus = () => {
  //   counter-=1;
  // };

  return (
    <div className="counter-wrapper">
      <div className="button-control">
        <Button name="-" onClick={onMinus} />
      </div>
      <p className="count">{count}</p>
      <div className="button-control">
        <Button name="+" onClick={onPlus} />
      </div>
    </div>
  );
}

export default Counter;