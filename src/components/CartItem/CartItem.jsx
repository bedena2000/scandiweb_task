/* eslint-disable react/prop-types */
import { Component } from "react";
import styles from "./CartItem.module.css";
import Size from "../Size/Size";
import Color from "../Color/Color";
import CartSize from "../CartSize/CartSize";
import CartColor from "../CartColor/CartColor";

class CartItem extends Component {
  render() {
    const item = this.props.item;
    console.log(item);
    return (
      <div className={`${styles["cartItem-container"]}`}>
        <div className={`${styles["cartItem-info"]}`}>
          <div className={`${styles["cartItem-info-left"]}`}>
            <p className={`${styles["cartItem-info-name"]}`}>{item.name}</p>
            <p className={`${styles["cartItem-info-price"]}`}>${item.price}</p>
          </div>
          <div className={`${styles["cartItem-info-right"]}`}>
            <div>
              {item.options["Size"] && (
                <CartSize sizeOption={item.options.Size} />
              )}
            </div>
            <div>
              {item.options["Color"] && (
                <CartColor
                  selectedColor={item.options.Color}
                  allColors={item.colors}
                />
              )}
            </div>
          </div>
        </div>

        <div className={`${styles["cartItem-image"]}`}></div>
      </div>
    );
  }
}

export default CartItem;
