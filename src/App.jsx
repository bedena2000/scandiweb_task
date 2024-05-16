import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import { MainContextProvider } from "./context";

import WomenPage from "./pages/WomenPage";
import KidsPage from "./pages/KidsPage";
import MenPage from "./pages/MenPage";
import ErrorPage from "./pages/ErrorPage";
import DetailsPage from "./pages/DetailsPage";
import { checkObjects } from "./helpers";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSelectedItemId: null,
      cartItems: [],
    };
  }

  render() {
    const changeCurrentSelectedItemId = (selectedId) => {
      this.setState({
        currentSelectedItemId: selectedId,
      });
    };

    const addCartItem = (item) => {
      const { cartItems } = this.state;
      const itemId = item.id;

      const isContain = this.state.cartItems.filter((cartItem) => {
        return cartItem.id === itemId;
      });

      const sameItems = isContain.filter((sameItem) =>
        checkObjects(sameItem, item)
      );

      if (sameItems.length <= 0) {
        this.setState({
          ...this.state,
          cartItems: [...cartItems, item],
        });
      }
    };

    return (
      <div className="container">
        <MainContextProvider
          value={{
            stateData: this.state,
            helperFunctions: {
              changeSelectedId: changeCurrentSelectedItemId,
            },
            addCartItem,
          }}
        >
          <Routes>
            <Route path="/" element={<WomenPage />} />
            <Route path="/men" element={<MenPage />} />
            <Route path="/kids" element={<KidsPage />} />
            <Route path="/kids" element={<KidsPage />} />
            <Route path="/details" element={<DetailsPage />} />

            {/* Error Page */}
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </MainContextProvider>
      </div>
    );
  }
}

export default App;
