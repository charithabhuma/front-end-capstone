import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import PageNotFound from "./components/pages/PageNotFound";
import TableReservation from "./components/pages/TableReservation";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout/>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<PageNotFound />} />
          <Route path="/menu" element={<PageNotFound />} />
          <Route path="/reservations" element={<TableReservation />} />
          <Route path="/orderOnline" element={<PageNotFound />} />
          <Route path="/login" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
