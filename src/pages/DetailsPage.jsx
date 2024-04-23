import { Component } from "react";
import Header from "../components/Header/Header";
import MainContext from "../context";
import { data } from "../data/data";
import styles from "./DetailsPage.module.css";
import Slider from "../components/Slider/Slider";
import ItemInfo from "../components/ItemInfo/ItemInfo";

class DetailsPage extends Component {
  static contextType = MainContext;

  constructor(props) {
    super(props);
    this.state = {
      currentSelectedElementInfo: {},
    };
  }

  componentDidMount() {
    if (this.context.stateData.currentSelectedItemId) {
      const product = data.data.products;
      const result = product.find(
        (item) => item.id === this.context.stateData.currentSelectedItemId
      );
      const resultForState = {
        name: result.name,
        description: result.description,
        id: result.id,
        options: {
          images: result.gallery,
          price: result.prices[0].amount,
          attributes: result.attributes,
        },
      };
      this.setState({
        currentSelectedElementInfo: resultForState,
      });
    }
  }

  render() {
    const currentSelectedElementInfo = this.state.currentSelectedElementInfo;
    if (!this.context.stateData.currentSelectedItemId) {
      return (
        <div>
          <Header />
          <p className={`${styles["without-items"]}`}>
            You have not selected any item
          </p>
        </div>
      );
    }

    return (
      <div>
        <Header />
        <div className={`${styles["detailsPageItemInfo"]}`}>
          <Slider
            sliderLeftImages={
              this.state.currentSelectedElementInfo.options?.images
            }
          />
          <ItemInfo item={currentSelectedElementInfo} />
        </div>
      </div>
    );
  }
}

export default DetailsPage;
