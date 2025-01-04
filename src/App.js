import "./App.css";
import Home from "./pages/Home";
import CityOffer from "./pages/CityOffer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CityOfferDetail from "./pages/CityOfferDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cityoffer" element={<CityOffer />} />
          <Route path="/cityofferDetails" element={<CityOfferDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
