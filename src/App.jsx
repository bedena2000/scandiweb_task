import { Component } from "react";
import { Route, Routes } from "react-router-dom";

import WomenPage from "./pages/WomenPage";
import KidsPage from "./pages/KidsPage";
import MenPage from "./pages/MenPage";
import ErrorPage from "./pages/ErrorPage";
class App extends Component {
  render() {
    return (
      <div className="container">
        <Routes>
          <Route path="/" element={<WomenPage />} />
          <Route path="/men" element={<MenPage />} />
          <Route path="/kids" element={<KidsPage />} />

          {/* Error Page */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    );
  }
}

export default App;
