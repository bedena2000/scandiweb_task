/* eslint-disable react/prop-types */
import { Component } from "react";
import styles from "./Card.module.css";

class Card extends Component {
  render() {
    return (
      <div className={`${styles["cardItemWrapper"]}`}>
        <div className={`${styles["cardItemImage"]}`}>
          <img alt="cardItem" src={this.props.cardImage} />
        </div>

        <p className={`${styles["cardItemName"]}`}>{this.props.cardTitle}</p>

        <p className={`${styles["cardItemPrice"]}`}>${this.props.cardPrice}</p>
      </div>
    );
  }
}

export default Card;
