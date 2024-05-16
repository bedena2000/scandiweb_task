import { Component } from "react";
import Header from "../components/Header/Header";
import MainContext from "../context";
import styles from "./DetailsPage.module.css";
import Slider from "../components/Slider/Slider";
import ItemInfo from "../components/ItemInfo/ItemInfo";
import { Query } from "@apollo/client/react/components";
import gql from "graphql-tag";

class DetailsPage extends Component {
  static contextType = MainContext;

  constructor(props) {
    super(props);
    this.state = {
      currentSelectedElementInfo: {},
      currentQuery: ``,
    };
  }

  componentDidMount() {
    if (this.context.stateData.currentSelectedItemId) {
      const currentId = this.context.stateData.currentSelectedItemId;
      this.setState({
        currentQuery: gql`
          query {
            product (id: ${currentId}) {
              name
              id
              description
              gallery {
                image
              }
              prices {
                amount
              }
              attributes {
                idTitle
                items {
                  idTitle,
                  displayValue
                }
              }
            }
          }
        `,
      });
    }
  }

  render() {
    if (!this.state.currentQuery) {
      return (
        <div>
          <Header />
          <p className={`${styles["without-items"]}`}>
            You have not selected any item
          </p>
        </div>
      );
    }

    if (this.state.currentSelectedElementInfo) {
      return (
        <Query query={this.state.currentQuery}>
          {({ loading, error, data }) => {
            if (loading) <div>loading...</div>;
            if (error) <div>something went wrong. please try again</div>;
            if (data) {
              const images = data.product.gallery.map((item) => item.image);
              const options = {
                description: data.product.description,
                attributes: data.product.attributes,
                name: data.product.name,
                price: data.product.prices[0].amount,
                id: data.product.id
              };
              return (
                <div>
                  <Header />
                  <div className={`${styles["detailsPageItemInfo"]}`}>
                    <Slider sliderLeftImages={images} />
                    <ItemInfo item={options} />
                  </div>
                </div>
              );
            }
            return <div>loading...</div>;
          }}
        </Query>
      );
    }
  }
}

export default DetailsPage;
