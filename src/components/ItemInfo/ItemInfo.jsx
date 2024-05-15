/* eslint-disable react/prop-types */
import { Component } from "react";
import styles from "./ItemInfo.module.css";
import MainContext from "../../context";
import Size from "../Size/Size";
import Color from "../Color/Color";

class ItemInfo extends Component {
  static contextType = MainContext;

  constructor(props) {
    super(props);
    this.state = {
      CurrentSettings: {},
    };
  }

  componentDidMount() {
    if (this.props.item) {
      const options = {};
      const attributes = this.props.item.attributes;

      attributes.map((item) => {
        options[item["idTitle"]] = item.items[0].idTitle;
      });

      this.setState({
        CurrentSettings: {
          name: this.props.item.name,
          description: this.props.item.description,
          options: options,
        },
      });
    }
  }

  render() {
    const addToCart = () => {
      console.log(this.state);
    }

    const changeCurrentSettings = (optionKey, optionValue) => {
      this.setState((prevState) => ({
        CurrentSettings: {
          options: {
            ...prevState.CurrentSettings.options,
            [optionKey]: optionValue,
          },
        },
      }));
    };

    if (!this.props.item) {
      return <div>loading items info...</div>;
    }

    if (this.props.item) {
      const item = this.props.item;
      const attributes = item["attributes"];
      return (
        <div className={`${styles["itemInfo"]}`}>
          <p className={`${styles["itemInfo__name"]}`}>{item.name}</p>
          <div className={`${styles["itemInfoWrapper"]}`}>
            {attributes.map((item) => {
              if (item.idTitle == "Size")
                return (
                  <Size
                    itemInfo={this.props.item.attributes}
                    options={this.state.CurrentSettings.options}
                    key={item.idTitle}
                    changeOption={changeCurrentSettings}
                  />
                );

              if (item.idTitle == "Color") {
                const colorArray = item["items"].map(
                  (item) => item.displayValue
                );
                return (
                  <Color
                    itemInfo={this.props.item}
                    colorList={colorArray}
                    options={this.state.CurrentSettings.options}
                    key={item.idTitle}
                    changeOption={changeCurrentSettings}
                  />
                );
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
                  <div className={`${styles["anotherItemsContainer"]}`}>
                    {items.map((item) => {
                      console.log(item);
                      return (
                        <div
                          onClick={() =>
                            changeCurrentSettings(itemTitle, item.displayValue)
                          }
                          className={`${styles["anotherItem"]}`}
                          key={item.displayValue}
                          style={{
                            backgroundColor:
                              this.state.CurrentSettings?.options?.[
                                itemTitle
                              ] === item.displayValue
                                ? "#3a3a3a"
                                : "",
                            color:
                              this.state.CurrentSettings?.options?.[
                                itemTitle
                              ] === item.displayValue
                                ? "white"
                                : "",
                          }}
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
          <a onClick={addToCart} className={`${styles["itemInfo__button"]}`}>
            ADD TO CART
          </a>
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
