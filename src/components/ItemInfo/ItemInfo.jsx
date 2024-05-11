/* eslint-disable react/prop-types */
import { Component } from "react";
import styles from "./ItemInfo.module.css";
import MainContext from "../../context";
import Size from "../Size/Size";
import Color from "../Color/Color";

class ItemInfo extends Component {
  static contextType = MainContext;

  render() {
    if (!this.props.item) {
      return <div>loading items info...</div>;
    }

    if (this.props.item) {
      const item = this.props.item;
      const attributes = item["attributes"];
      console.log(attributes);
      return (
        <div className={`${styles["itemInfo"]}`}>
          <p className={`${styles["itemInfo__name"]}`}>{item.name}</p>
          <div className={`${styles["itemInfoWrapper"]}`}>
            {attributes.map((item) => {
              if (item.idTitle == "Size") return <Size key={item.idTitle} />;

              if (item.idTitle == "Color") {
                const colorArray = item["items"].map(
                  (item) => item.displayValue
                );
                return <Color colorList={colorArray} key={item.idTitle} />;
              }

              const items = item["items"];
              const itemTitle = item.idTitle;
              return (
                <div
                  className={`${styles["itemAnotherInfoWrapper"]}`}
                  key={itemTitle}
                >
                  <p className={`${styles["itemAnotherTitle"]}`}>
                    {itemTitle}:
                  </p>
                  <div className={`${styles['anotherItemsContainer']}`}>
                    {items.map((item) => {
                      return (
                        <div
                          className={`${styles["anotherItem"]}`}
                          key={item.displayValue}
                        >
                          {item.displayValue}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
          <div className={`${styles["itemInfo__priceWrapper"]}`}>
            <p className={`${styles["itemInfo__priceTitle"]}`}>Price</p>
            <p className={`${styles["itemInfo__price"]}`}>${item.price}</p>
          </div>
          <a className={`${styles["itemInfo__button"]}`}>ADD TO CART</a>
          <p
            dangerouslySetInnerHTML={{ __html: item.description }}
            className={`${styles["itemInfo__description"]}`}
          ></p>
        </div>
      );
    }
  }
}

export default ItemInfo;
