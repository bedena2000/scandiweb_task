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
    const options = [];
    for (const [key, value] of Object.entries(item.options)) {
      if (key !== "Size" && key !== "Color")
        options.push({
          info: {
            title: key,
            value: value,
          },
        });
    }
    console.log(options);
    return (
      <div className={`${styles["cartItem-container"]}`}>
        <div className={`${styles["cartItem-info"]}`}>
          <div className={`${styles["cartItem-info-left"]}`}>
            <p className={`${styles["cartItem-info-name"]}`}>{item.name}</p>
            <p className={`${styles["cartItem-info-price"]}`}>${item.price}</p>
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
            <div className={`${styles["cartItem-info-options"]}`}>
              {options.map((item) => {
                return (
                  <div
                    key={item.info.title}
                    className={`${styles["cartItem-info-options__item"]}`}
                  >
                    <p
                      className={`${styles["cartItem-info-options__item--title"]}`}
                    >
                      {item.info.title}:
                    </p>
                    <p>{item.info.value}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={`${styles["cartItem-info-right"]}`}></div>
        </div>

        <div className={`${styles["cartItem-image"]}`}>
          <img src={item.image} alt="image" />
        </div>
      </div>
    );
  }
}

export default CartItem;
