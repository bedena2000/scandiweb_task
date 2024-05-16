import { Component } from "react";
import styles from "./WomenPage.module.css";
import Header from "../components/Header/Header";
import CardList from "../components/CardList/CardList";
// import { data } from "../data/data";
import { Query } from "@apollo/client/react/components";
import gql from "graphql-tag";

const getProducts = gql`
  query {
    products {
      id
      name
      gallery {
        image
      }
      prices {
        amount
      }
    }
  }
`;

class WomenPage extends Component {
  render() {
    return (
      <Query query={getProducts}>
        {({ loading, error, data }) => {
          if (loading) return <h1>Loading data...</h1>;
          if (error) return <h1>Something went wrong. please try again</h1>;
          return (
            <div className={`${styles["WomenPageWrapper"]}`}>
              <Header />
              <CardList cardListTitle="Women" cardListArray={data.products} />
            </div>
          );
        }}
      </Query>
    );
  }
}

export default WomenPage;
