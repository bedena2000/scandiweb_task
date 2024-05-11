/* eslint-disable react/prop-types */
import { Component } from "react";
import styles from "./Color.module.css";

class Color extends Component {
  render() {
    const colorList = this.props.colorList;
    return (
      <div className={`${styles["colorContainer"]}`}>
        <p className={`${styles["colorTitle"]}`}>COLOR:</p>
        <div className={`${styles["colorWrapper"]}`}>
          {colorList.map((item) => {
            return (
              <div
                style={{
                  background: item,
                }}
                key={item}
                className={`${styles["colorItem"]}`}
              ></div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Color;
