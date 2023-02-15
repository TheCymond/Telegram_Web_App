import { useState, useEffect } from "react";
import "./App.css";
import Card from "./Components/Card/Card";
import Cart from "./Components/Cart/Cart";
const { getData } = require("./db/db");
const foods = getData();

const tele = window.Telegram.WebApp;

function App() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    tele.ready();
  });
const profit= 70000000
  return (
    <div class="bg-slate-50">
      <h1 class="font-sans text-3xl text-center font-bold py-4 pb-9 text-green-900">Profit Report</h1>
      <table class="table-auto border-separate text-xl border-spacing-0 font-sans" >
        <thead class="bg-slate-200">
          <tr class="text-xl font-semibold">
            <th class="" />
            <th class="px-2 pl-4 text-right text-green-900">Doanh Thu</th>
            <th class="px-2 text-center text-green-900">Chi Phí</th>
            <th class="px-2 text-center text-green-900">Lợi Nhuận</th>
          </tr>
        </thead>
        <tbody>
        <td class="font-bold italic">TỔNG QUAN</td><td/><td/>
          <tr class="text-sm">
            <td class="text-center ">Tổng</td>
            <td class="px-2 text-right font-mono ">{profit.toLocaleString('us-US', { style: 'currency', currency: 'VND' })}</td>
            <td class="px-2 text-right font-mono">{profit.toLocaleString('us-US', { style: 'currency', currency: 'VND' })}</td>
            <td class="px-2 text-right font-mono">{profit.toLocaleString('us-US', { style: 'currency', currency: 'VND' })}</td>
          </tr>
          <tr>
          <td class="font-bold italic">CÁC DỊCH VỤ</td><td/><td/>
          </tr>
          <tr class="text-sm">
            <td class="text-center">Ẩm Thực</td>
            <td class="px-2 text-right font-mono">{profit.toLocaleString('us-US', { style: 'currency', currency: 'VND' })}</td>
            <td class="px-2 text-right font-mono">{profit.toLocaleString('us-US', { style: 'currency', currency: 'VND' })}</td>
            <td class="px-2 text-right font-mono">{profit.toLocaleString('us-US', { style: 'currency', currency: 'VND' })}</td>
          </tr>
          <tr class="text-sm">
            <td class="text-center">Tour</td>
            <td class="px-2 text-right font-mono">{profit.toLocaleString('us-US', { style: 'currency', currency: 'VND' })}</td>
            <td class="px-2 text-right font-mono">{profit.toLocaleString('us-US', { style: 'currency', currency: 'VND' })}</td>
            <td class="px-2 text-right font-mono">{profit.toLocaleString('us-US', { style: 'currency', currency: 'VND' })}</td>
          </tr>
          <tr class="text-sm">
            <td class="text-center">Lưu Trú</td>
            <td class="px-2 text-right font-mono">{profit.toLocaleString('us-US', { style: 'currency', currency: 'VND' })}</td>
            <td class="px-2 text-right font-mono">{profit.toLocaleString('us-US', { style: 'currency', currency: 'VND' })}</td>
            <td class="px-2 text-right font-mono">{profit.toLocaleString('us-US', { style: 'currency', currency: 'VND' })}</td>
          </tr>
          <tr>
          <td class="font-bold italic">THÀNH VIÊN</td><td/><td/>
          </tr>
          <tr class="text-sm">
            <td class="text-center">Mẫn Trịnh</td>
            <td class="px-2 text-right font-mono">{profit.toLocaleString('us-US', { style: 'currency', currency: 'VND' })}</td>
            <td class="px-2 text-right font-mono">{profit.toLocaleString('us-US', { style: 'currency', currency: 'VND' })}</td>
            <td class="px-2 text-right font-mono">{profit.toLocaleString('us-US', { style: 'currency', currency: 'VND' })}</td>
          </tr>
          <tr class="text-sm">
            <td class="text-center">Liễu Lê</td>
            <td class="px-2 text-right font-mono">{profit.toLocaleString('us-US', { style: 'currency', currency: 'VND' })}</td>
            <td class="px-2 text-right font-mono">{profit.toLocaleString('us-US', { style: 'currency', currency: 'VND' })}</td>
            <td class="px-2 text-right font-mono">{profit.toLocaleString('us-US', { style: 'currency', currency: 'VND' })}</td>
          </tr>
          <tr class="text-sm">
            <td class="text-center">Hương Thanh</td>
            <td class="px-2 text-right font-mono">{profit.toLocaleString('us-US', { style: 'currency', currency: 'VND' })}</td>
            <td class="px-2 text-right font-mono">{profit.toLocaleString('us-US', { style: 'currency', currency: 'VND' })}</td>
            <td class="px-2 text-right font-mono">{profit.toLocaleString('us-US', { style: 'currency', currency: 'VND' })}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
