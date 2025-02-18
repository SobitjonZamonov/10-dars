import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Product } from "./components/product-card";
import { Home } from "./components/home-card";

function App() {
  
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
            </>
          }
        />
        <Route path="/product" element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;
