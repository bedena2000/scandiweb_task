import { Component } from "react";
import styles from "./CartColor.module.css";

class CartColor extends Component {
  render() {
    const selectedColor = this.props.selectedColor;
    const allColors = this.props.allColors;
    console.log(selectedColor);
    console.log(allColors);
    return (
      <div className={`${styles["cartColor-container"]}`}>
        {/* {this.allColors.map((item) => {
          return (
            <div key={item} className={`${styles["cartColor-item-wrapper"]}`}>
              <div
                style={{
                  background: item,
                }}
                className={`${styles["cartColor-item-center"]}`}
              ></div>
            </div>
          );
        })} */}
      </div>
    );
  }
}

export default CartColor;
