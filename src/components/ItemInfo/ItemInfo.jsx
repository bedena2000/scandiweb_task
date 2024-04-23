/* eslint-disable react/prop-types */
import { Component } from "react";
import styles from "./ItemInfo.module.css";
import MainContext from "../../context";

class ItemInfo extends Component {
  static contextType = MainContext;

  render() {
    const item = this.props.item;
    // const attributes = this.props.item.options.attributes;
    console.log(this.props.item.options?.attributes);
    console.log(item);
    if (item && item.options) {
      return (
        <div className={`${styles["itemInfo"]}`}>
          <p className={`${styles["itemInfo__name"]}`}>{item.name}</p>
          {this.props.item.options?.attributes ? (
            this.props.item.options?.attributes[0]?.id === "Size" ? (
              <div className={`${styles["itemInfo_sizeWrapper"]}`}>
                <p className={`${styles["itemInfo_sizeWrapper__size"]}`}>
                  Size:
                </p>
                <div className={`${styles["itemInfo_sizeWrapper-box"]}`}>
                  <div
                    className={`${styles["itemInfo_sizeWrapper-box__item"]}`}
                  >
                    XS
                  </div>
                  <div
                    className={`${styles["itemInfo_sizeWrapper-box__item"]}`}
                  >
                    S
                  </div>
                  <div
                    className={`${styles["itemInfo_sizeWrapper-box__item"]}`}
                  >
                    M
                  </div>
                  <div
                    className={`${styles["itemInfo_sizeWrapper-box__item"]}`}
                  >
                    L
                  </div>
                </div>
              </div>
            ) : (
              <div className={`${styles["itemInfo_colorWrapper"]}`}>
                <p className={`${styles["itemInfo_colorWrappper__title"]}`}>
                  Color:
                </p>
                <div className={`${styles["itemInfo_colorWrapper_box"]}`}>
                  {this.props.item?.options?.attributes[0].items.map((item) => {
                    return (
                      <div
                        key={item.value}
                        style={{
                          background: item.value
                        }}
                        className={`${styles["itemInfo_colorWrapper_box__item"]}`}
                      ></div>
                    );
                  })}
                </div>
              </div>
            )
          ) : null}
          <div className={`${styles["itemInfo__priceWrapper"]}`}>
            <p className={`${styles["itemInfo__priceTitle"]}`}>Price</p>
            <p className={`${styles["itemInfo__price"]}`}>
              ${item.options.price}
            </p>
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
