import { Component } from "react";
import Header from "../components/Header/Header";
import CardList from "../components/CardList/CardList";
import { data } from "../data/data";

class WomenPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <CardList cardListTitle="Women" cardListArray={data} />
      </div>
    );
  }
}

export default WomenPage;
