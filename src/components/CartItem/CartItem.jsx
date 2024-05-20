/* eslint-disable react/prop-types */
import { Component } from "react";
import styles from "./CartItem.module.css";
import CartSize from "../CartSize/CartSize";
import CartColor from "../CartColor/CartColor";
import PlusIcon from "../../assets/icons/plus-square.png";
import MinusIcon from "../../assets/icons/minus-square.png";

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
    console.log(item);
    return (
      <div>
        <div className={`${styles["cartItem-container"]}`}>
          <div className={`${styles["cartItem-info"]}`}>
            <div className={`${styles["cartItem-info-left"]}`}>
              <div>
                <p className={`${styles["cartItem-info-name"]}`}>{item.name}</p>
                <p className={`${styles["cartItem-info-price"]}`}>
                  ${item.price}
                </p>
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
              <div >
                <img onClick={() => this.props.changeAmount(item, '+')} className={`${styles["cartItem-amount"]}`} src={PlusIcon} alt="plusIcon" />
                <p>{item.amount}</p>
                <img onClick={() => this.props.changeAmount(item, '-')} src={MinusIcon} alt="MinusIcon" />
              </div>
            </div>
            <div className={`${styles["cartItem-info-right"]}`}>
              <div className={`${styles["cartItem-image"]}`}>
                <img src={item.image} alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CartItem;
