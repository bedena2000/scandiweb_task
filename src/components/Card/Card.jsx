/* eslint-disable react/prop-types */
import { Component } from "react";
import styles from "./Card.module.css";
import addToCartLogo from "../../assets/icons/add_cart_icon.png";
import { Navigate } from "react-router-dom";
import MainContext from "../../context";

class Card extends Component {
  static contextType = MainContext;

  constructor(props) {
    super(props);
    this.state = {
      isHover: false,
      clicked: false,
    };
  }

  render() {
    const addToCardHandler = () => {
      console.log("add to cart is being activated");
    };

    const cardHandler = () => {
      this.context.helperFunctions.changeSelectedId(this.props.cardId);
      this.setState({ clicked: true });
    };

    if (this.state.clicked) {
      return <Navigate to="/details" />;
    }

    return (
      <div
        onMouseEnter={() => this.setState({ isHover: true })}
        onMouseLeave={() => this.setState({ isHover: false })}
        className={`${styles["cardItemWrapper"]}`}
        onClick={cardHandler}
      >
        <div className={`${styles["cardItemImage"]}`}>
          <img alt="cardItem" src={this.props.cardImage} />
        </div>

        <p className={`${styles["cardItemName"]}`}>{this.props.cardTitle}</p>

        <p className={`${styles["cardItemPrice"]}`}>${this.props.cardPrice}</p>

        {this.state.isHover ? (
          <div
            onClick={addToCardHandler}
            className={`${styles["addToCartWrapper"]}`}
          >
            <img src={addToCartLogo} alt="addToCart" />
          </div>
        ) : null}
      </div>
    );
  }
}

export default Card;
