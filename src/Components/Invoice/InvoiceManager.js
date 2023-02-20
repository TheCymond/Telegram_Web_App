import { useState, useEffect } from "react";
import UpdateButton from "../Button/Button";
import listLatestInvoices from "../../db/invoice";
import { Link } from "react-router-dom";


export function InvoiceManager() {
  const [invoices, setInvoices] = useState([
    {
      "id": "000000000000000000",
      "guestName": "",
      "issuer": "",
      "issuerId":"",
      "subTotal": 0
    }
  ])

  useEffect(() => {
    listLatestInvoices().then(data => setInvoices(data))
  }, []);



  return (
    <div class="bg-slate-50">
      <div class="py-2 px-2">
        <UpdateButton title="+ Add" disable={false} onClick={() => {
        }} />
      </div>

      <table class="table-auto border-separate text-xl border-spacing-0 font-sans px-2 w-11/12" >
        <thead class="bg-slate-200">
          <tr class="text-xs font-semibold">
            <th class="px-2 pl-4 text-right text-green-900">Guest Name</th>
            <th class="px-2 text-center text-green-900">Issuer</th>
            <th class="px-2 text-center text-green-900">Grand Amount</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((inv) => {
            return (
              <tr class="text-sm">
                <td class="px-2 text-right font-mono">{inv.guestName}</td>
                <td class="px-2 text-right font-mono">{inv.issuer}</td>
                <td class="px-2 text-right font-mono">{inv.subTotal.toLocaleString('us-US', { style: 'currency', currency: 'VND' })}</td>
                <td class="px-2 text-right font-mono">
                  <Link to={inv.id}>Edit</Link>
                </td> 
              </tr>
            )
          })}
        </tbody>
      </table>
    </div >
  );
}
