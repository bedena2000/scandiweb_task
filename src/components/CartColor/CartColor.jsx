/* eslint-disable react/prop-types */
import { Component } from "react";
import styles from "./CartColor.module.css";

class CartColor extends Component {
  render() {
    const selectedColor = this.props.selectedColor;
    const allColors = this.props.allColors;
    console.log(selectedColor);
    console.log(allColors);
    return (
      <div data-testid='cart-item-attribute-color' className={`${styles["cartColor-container"]}`}>
        <p className={`${styles["cartColor-title"]}`}>Color:</p>
        <div className={`${styles["cartColor-wrapper"]}`}>
          {allColors.map((item) => {
            return (
              <div key={item} className={`${styles["cartColor-item"]}`}>
                <div
                  className={`${styles["cartColor-center"]}`}
                  style={{
                    background: item,
                  }}
                ></div>
                <div style={{
                  border: selectedColor === item ? '1px solid #5ECE7B' : null
                }} className={`${styles["cartColor-border"]}`}></div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default CartColor;
