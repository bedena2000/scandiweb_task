import { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import MainLogo from "../../assets/icons/brand_icon.svg";
import CartLogo from "../../assets/icons/cart_icon.svg";
import MainContext from "../../context";
import CartItems from "../CartItems/CartItems";

class Header extends Component {
  static contextType = MainContext;

  render() {
    const url = window.location.pathname;

    function isActive(pathToCheck) {
      return url === pathToCheck;
    }

    const seeCart = () => {
      this.context.changeModal();
      console.log("card clicked");
    };

    return (
      <div className={styles["headerWrapper"]}>
        <div>
          <Link
            style={{
              color: isActive("/") ? "#5ECE7B" : null,
            }}
            to="/"
            className={`${isActive("/") ? "headerLinkActive" : ""} ${
              styles["headerLink"]
            }`}
          >
            Women
          </Link>
          <Link
            style={{
              color: isActive("/men") ? "#5ECE7B" : null,
            }}
            to="/men"
            className={`${isActive("/men") ? "headerLinkActive" : ""} ${
              styles["headerLink"]
            }`}
          >
            Men
          </Link>
          <Link
            style={{
              color: isActive("/kids") ? "#5ECE7B" : null,
            }}
            to="/kids"
            className={`${isActive("/kids") ? "headerLinkActive" : ""} ${
              styles["headerLink"]
            }`}
          >
            Kids
          </Link>
        </div>

        <Link to="/" className={`${styles["headerIcon"]}`}>
          <img src={MainLogo} alt="BrandIcon" />
        </Link>

        <div className={`${styles["cartIcon"]}`}>
          <div onClick={seeCart}>
            <img src={CartLogo} alt="cartLogo" />

            {this.context.stateData.cartItems.length > 0 ? (
              <p className={`${styles["cartItemsNumber"]}`}>
                {this.context.stateData.cartItems.length}
              </p>
            ) : null}
          </div>
          {this.context.stateData.isModal && <CartItems />}
        </div>
      </div>
    );
  }
}

export default Header;
