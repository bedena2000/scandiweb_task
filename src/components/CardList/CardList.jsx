/* eslint-disable react/prop-types */
import { Component } from "react";
import styles from "./CardList.module.css";
import Card from "../Card/Card";

class CardList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const products = this.props.cardListArray.data.products;
    
    return (
      <div className={`${styles["CardListWrapper"]}`}>
        <p className={`${styles["CardListTitle"]}`}>
          {this.props.cardListTitle}
        </p>

        <div className={`${styles["cardListArrayWrapper"]}`}>
          {
            products.map(item => <Card 
              cardImage={item.gallery[0]}
              cardTitle={item.name}
              cardPrice={item.prices[0].amount}
              key={item.id} 
              />)
          }
        </div>
      </div>
    );
  }
}

export default CardList;
