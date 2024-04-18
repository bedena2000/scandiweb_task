import { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import MainLogo from '../../assets/icons/brand_icon.svg';
import CartLogo from '../../assets/icons/cart_icon.svg';

class Header extends Component {
  render() {
    const url = window.location.pathname;

    function isActive(pathToCheck) {
      return url === pathToCheck;
    }

    return (
      <div className={styles["headerWrapper"]}>
        <div>
          <Link
            style={{
              color: isActive("/") ? "#5ECE7B" : null,
            }}
            to="/"
            className={`${isActive('/') ? 'headerLinkActive' : ''} ${styles["headerLink"]}`}
          >
            Women
          </Link>
          <Link
            style={{
              color: isActive("/men") ? "#5ECE7B" : null,
            }}
            to="/men"
            className={`${isActive('/men') ? 'headerLinkActive' : ''} ${styles["headerLink"]}`}
          >
            Men
          </Link>
          <Link
            style={{
              color: isActive("/kids") ? "#5ECE7B" : null,
            }}
            to="/kids"
            className={`${isActive('/kids') ? 'headerLinkActive' : ''} ${styles["headerLink"]}`}
          >
            Kids
          </Link>
        </div>

        <div className={`${styles['headerIcon']}`}>
            <img src={MainLogo}  alt="BrandIcon" />
        </div>

        <div className={`${styles['cartIcon']}`}>
            <img src={CartLogo} alt="cartLogo" />
        </div>
      </div>
    );
  }
}

export default Header;
