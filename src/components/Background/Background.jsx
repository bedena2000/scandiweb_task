import { Component } from "react";
import styles from "./Background.module.css";
import MainContext from "../../context/index";

class Background extends Component {
  static contextType = MainContext;

  render() {
    return (
      <div
        className={`${styles["background"]}`}
        onClick={() => this.context.changeModal()}
      ></div>
    );
  }
}

export default Background;
