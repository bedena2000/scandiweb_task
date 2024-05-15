/* eslint-disable react/prop-types */
import { Component } from "react";
import styles from "./Color.module.css";

class Color extends Component {
  render() {
    const colorList = this.props.colorList;
    console.log(this.props);
    return (
      <div className={`${styles["colorContainer"]}`}>
        <p className={`${styles["colorTitle"]}`}>COLOR:</p>
        <div className={`${styles["colorWrapper"]}`}>
          {colorList.map((item) => {
            return (
              <div
                onClick={() => this.props.changeOption("Color", item)}
                style={{
                  border:
                    this.props.options?.Color == item
                      ? "2px solid #999956"
                      : "",
                }}
                key={item}
                className={`${styles["colorItem"]}`}
              >
                <div
                  style={{
                    background: item,
                  }}
                  className={`${styles["colorItemMain"]}`}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Color;
