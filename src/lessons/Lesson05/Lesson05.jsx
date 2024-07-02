import {v4} from 'uuid';

import Button from "../../components/Button/Button";
import "./styles.css";
import { useState } from "react";

function Lesson05() {
    const [products, setProducts] =useState([]);
    const buttonNames = ["Burger", "Fries", "Cola", "Salad", "Ketchup", "Ice-crem"];


    const addProduct = (product) => {
        setProducts((prevValue)=> {
            return [...prevValue, product];
        });
    };
    const orderList = products.map((value) => {
        return <li key={v4()} className="product">{value}</li>
    })

        return (
        <div className="page-wrapper">
            <h1>Menu</h1>
          <div className="button-container">
            <div className="button-control">
              <Button name={buttonNames[0]} onClick={() => addProduct(buttonNames[0])} />
            </div>
            <div className="button-control">
              <Button name={buttonNames[1]} onClick={() => addProduct(buttonNames[1])}/>
            </div>
            <div className="button-control">
              <Button name={buttonNames[2]} onClick={() => addProduct(buttonNames[2])} />
            </div>
            <div className="button-control">
              <Button name={buttonNames[3]} onClick={() => addProduct(buttonNames[3])} />
            </div>
            <div className="button-control">
              <Button name={buttonNames[4]} onClick={() => addProduct(buttonNames[4])} />
            </div>
            <div className="button-control">
              <Button name={buttonNames[5]} onClick={() => addProduct(buttonNames[5])} />
            </div>
          </div>
          <div className="order-list-container">
            <h2>Order list:</h2>
            <ul>
               {orderList}
            </ul>
          </div>
        </div>
      );
    };
    
    export default Lesson05;