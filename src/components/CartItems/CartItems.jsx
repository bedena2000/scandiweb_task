/* eslint-disable react/prop-types */
import { Component } from "react";
import styles from "./CartItems.module.css";
import MainContext from "../../context";
import { client } from "../../main";
import CartItem from "../CartItem/CartItem";
import { checkObjects } from "../../helpers";
import gql from "graphql-tag";

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
      if (changeSymbol === "-" && item.amount === 1) {
        this.setState({
          carts: this.state.carts.filter(
            (cartItem) => !checkObjects(cartItem, item)
          ),
        });
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
      this.context.newCartItems(newState);
      this.setState({
        carts: newState,
      });
    };

    const saveCartItems = async () => {
      const { carts } = this.state;
      const result = carts.map((item) => {
        let settings = "";
        for (const [key, value] of Object.entries(item.options)) {
          if (key !== "Size" && key !== "value") {
            settings = settings + `${key}:${value},`;
          }
        }
        const final = {
          product_id: item.id,
          color: item.options.Color || "",
          size: item.options.Size || "",
          settings,
        };
        return final;
      });
      result.map(async (item) => {
        await client.mutate({
          mutation: gql`
            mutation {
              addCartItem(product_id: ${item.product_id}, size: "${item.size}", color: "${item.color}", settings: "${item.settings}")
            }
          `,
        });
      });

      this.setState({
        carts: [],
      });
      this.context.newCartItems([]);
    };

    console.log(this.state.carts);

    return (
      <div className={`${styles["container"]}`}>
        <div className={`${styles["title-container"]}`}>
          <p className={`${styles["title"]}`}>My Bag,</p>
          <p data-testid="cart-total" className={`${styles["title-content"]}`}>
            {this.state.carts.length === 1
              ? `${this.state.carts.length} item`
              : this.state.carts.length > 1
              ? `${this.state.carts.length} items`
              : null}
          </p>
        </div>
        <div className={`${styles["cartList"]}`}>
          {this.state.carts.map((item) => {
            const optionsString = Object.entries(item.options)
              .map(([key, value]) => `${key}:${value}`)
              .join(";");
            const uniqueKey = `${item.id}-${optionsString}`;
            console.log(uniqueKey);

            return (
              <CartItem
                key={uniqueKey}
                item={item}
                changeAmount={changeAmount}
              />
            );
          })}
        </div>
        <div className={`${styles["totalPrice"]}`}>
          <p>Total:</p>
          <p>
            $
            {this.state.carts
              .reduce((acc, val) => acc + Number(val.price * val.amount), 0)
              .toFixed(2)}
          </p>
        </div>
        <button
          onClick={saveCartItems}
          className={`${styles["place-order-button"]}`}
        >
          PLACE ORDER
        </button>
      </div>
    );
  }
}

export default CartItems;
