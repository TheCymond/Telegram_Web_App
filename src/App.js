import { useEffect } from "react";
import "./App.css";
import { ProfitReport } from "./Components/Profit/ProfitReport"
import { InvoiceManager } from "./Components/Invoice/InvoiceManager"
import { EditInvoice } from "./Components/Invoice/EditInvoice"
import { BrowserRouter as Router, Link, Route, Routes, Outlet } from "react-router-dom"
import { Helmet } from "react-helmet"

const tele = window.Telegram.WebApp;

function App() {

  useEffect(() => {
    tele.ready();
  }, []);
  return (
    <div>
      <Helmet>
        <script src="../flowbite/dist/flowbite.min.js"></script>
        <script src="../flowbite/dist/datepicker.js"></script>
      </Helmet>

      <Router>
        <div class="my-2 mx-2">
          <Link to="profit" class="px-3 py-2 bg-gray-200 text-amber-900 text-sm font-sans ">Profit</Link>
          <Link to="invoice" class="px-3 py-2 bg-gray-200 text-amber-900 text-sm font-sans ">Invoice</Link>
        </div>
        <Routes>
          <Route path="profit" element={<ProfitReport />} />
          <Route path="invoice" element={<InvoiceManager />} />
          <Route path="invoice/:invoiceId" element={<EditInvoice />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App
