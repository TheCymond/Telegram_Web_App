import { useEffect } from "react";
import "./App.css";
import { ProfitReport } from "./Components/Profit/ProfitReport"
import { InvoiceManager } from "./Components/Invoice/InvoiceManager"
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom"

const tele = window.Telegram.WebApp;

function App() {

  useEffect(() => {
    tele.ready();
  }, []);
  return (
    <Router>
      <div class="my-2 mx-2">
        <Link to="profit" class="px-3 py-2 bg-gray-200 text-amber-900 text-sm font-sans ">Profit</Link>
        <Link to="invoice" class="px-3 py-2 bg-gray-200 text-amber-900 text-sm font-sans ">Invoice</Link>
      </div>
      <Routes>
        <Route path="/profit" element={<ProfitReport/>}></Route>
        <Route path="/invoice" element={<InvoiceManager/>}></Route>
      </Routes>
    </Router>
  );
}

export default App
