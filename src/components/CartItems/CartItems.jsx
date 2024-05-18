import { Component } from "react";
import styles from "./CartItems.module.css";
import MainContext from "../../context";
import { client } from "../../main";
import CartItem from "../CartItem/CartItem";

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
      carts: items
    });
  }

  render() {
    console.log(this.state);
    return (
      <div className={`${styles['container']}`}>
        <div className={`${styles['title-container']}`}>
          <p className={`${styles['title']}`}>My Bag,</p>
          <p className={`${styles['title-content']}`}>
            {this.state.carts.length} items
          </p>
        </div>
        <div className={`${styles['cartList']}`}>
          {
            this.state.carts.map(item => <CartItem key={item.options} item={item} />)
          }
        </div>
      </div>
    );
  }
}

export default CartItems;
