import { Component } from "react";
import styles from "./CartItems.module.css";
import MainContext from "../../context";
import { client } from "../../main";
import CartItem from "../CartItem/CartItem";
import { checkObjects } from "../../helpers";

class CartItems extends Component {
  static contextType = MainContext;

  constructor(props) {
    super(props);
    this.state = {
      carts: [],
    };
  }

  componentDidMount() {
    const items = this.context.stateData.cartItems;
    this.setState({
      carts: items,
    });
  }

  render() {
    const changeAmount = (item, changeSymbol) => {
      if(changeSymbol === "-" && item.amount === 1) {
        this.setState({
          carts: this.state.carts.filter(cartItem => !checkObjects(cartItem, item))
        })
        return;
      }
      
      const newState = this.state.carts.map((cartItem) => {
        if (checkObjects(cartItem, item)) {
          if (changeSymbol === "+") {
            return {
              ...cartItem,
              amount: cartItem.amount + 1,
            };
          } else if (changeSymbol === "-") {
            return {
              ...cartItem,
              amount: cartItem.amount - 1,
            };
          } else {
            return cartItem;
          }
        } else {
          return cartItem;
        }
      });
      this.setState({
        carts: newState,
      });
    };
    console.log(this.state);

    return (
      <div className={`${styles["container"]}`}>
        <div className={`${styles["title-container"]}`}>
          <p className={`${styles["title"]}`}>My Bag,</p>
          <p className={`${styles["title-content"]}`}>
            {this.state.carts.length} items
          </p>
        </div>
        <div className={`${styles["cartList"]}`}>
          {this.state.carts.map((item) => (
            <CartItem
              key={item.options}
              item={item}
              changeAmount={changeAmount}
            />
          ))}
        </div>
        <div className={`${styles["totalPrice"]}`}>
          <p>Total:</p>
          <p>
            $
            {this.state.carts.reduce(
              (acc, val) => acc + Number(val.price * val.amount),
              0
            ).toFixed(2)}
          </p>
        </div>
      </div>
    );
  }
}

export default CartItems;
