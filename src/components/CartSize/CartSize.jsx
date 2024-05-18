/* eslint-disable react/prop-types */
import { Component } from "react";
import styles from "./CartSize.module.css";

const cartSizeArray = [
  {
    title: "XS",
    content: "Small",
    id: 1,
  },
  {
    title: "S",
    content: "Medium",
    id: 2,
  },
  {
    title: "M",
    content: "Large",
    id: 3,
  },
  {
    title: "L",
    content: "Extra Large",
    id: 4,
  },
];

class CartSize extends Component {
  render() {
    const sizeOption = this.props.sizeOption;
    return (
      <div className={`${styles["cartSize-container"]}`}>
        {cartSizeArray.map((item) => {
          return (
            <div
              style={{
                background: sizeOption === item.content ? "#1D1F22" : null,
                color: sizeOption === item.content ? "white" : null,
              }}
              key={item.id}
              className={`${styles["cartSize-item"]}`}
            >
              {item.title}
            </div>
          );
        })}
      </div>
    );
  }
}

export default CartSize;
