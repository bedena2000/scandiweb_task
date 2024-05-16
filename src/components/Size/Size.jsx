/* eslint-disable react/prop-types */
import { Component } from "react";
import styles from "./Size.module.css";

class Size extends Component {
  render() {
    return (
      <div className={`${styles["sizeContainer"]}`}>
        <p className={`${styles["sizeTitle"]}`}>SIZE:</p>
        <div className={`${styles["sizeWrapper"]}`}>
          <div
            style={{
              backgroundColor:
                this.props.options?.Size == "Small" ? "#1d1f22" : "",
              color: this.props.options?.Size == "Small" ? "white" : "",
            }}
            onClick={() => this.props.changeOption("Size", "Small")}
            className={`${styles["sizeItem"]}`}
          >
            XS
          </div>
          <div
            style={{
              backgroundColor:
                this.props.options?.Size == "Medium" ? "#1d1f22" : "",
              color: this.props.options?.Size == "Medium" ? "white" : "",
            }}
            onClick={() => this.props.changeOption("Size", "Medium")}
            className={`${styles["sizeItem"]}`}
          >
            S
          </div>
          <div
            style={{
              backgroundColor:
                this.props.options?.Size == "Large" ? "#1d1f22" : "",
              color: this.props.options?.Size == "Large" ? "white" : "",
            }}
            onClick={() => this.props.changeOption("Size", "Large")}
            className={`${styles["sizeItem"]}`}
          >
            M
          </div>
          <div
            style={{
              backgroundColor:
                this.props.options?.Size == "Extra Large" ? "#1d1f22" : "",
              color: this.props.options?.Size == "Extra Large" ? "white" : "",
            }}
            onClick={() => this.props.changeOption("Size", "Extra Large")}
            className={`${styles["sizeItem"]}`}
          >
            L
          </div>
        </div>
      </div>
    );
  }
}

export default Size;
