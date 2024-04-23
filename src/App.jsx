import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import { MainContextProvider } from "./context";

import WomenPage from "./pages/WomenPage";
import KidsPage from "./pages/KidsPage";
import MenPage from "./pages/MenPage";
import ErrorPage from "./pages/ErrorPage";
import DetailsPage from "./pages/DetailsPage";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSelectedItemId: null,
    };
  }

  render() {
    const changeCurrentSelectedItemId = (selectedId) => {
      this.setState({
        currentSelectedItemId: selectedId,
      });
    };

    return (
      <div className="container">
        <MainContextProvider
          value={{
            stateData: this.state,
            helperFunctions: {
              changeSelectedId: changeCurrentSelectedItemId,
            },
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
