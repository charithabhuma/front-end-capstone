import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import PageNotFound from "./components/pages/PageNotFound";
import Booking from "./components/pages/Booking";
import Layout from "./components/layout/Layout";
import Confirmation from "./components/pages/Booking/Confirmation";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<PageNotFound />} />
            <Route path="/menu" element={<PageNotFound />} />
            <Route path="/reservations" element={<Booking />} />
            <Route path="/orderOnline" element={<PageNotFound />} />
            <Route path="/login" element={<PageNotFound />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
