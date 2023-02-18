import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getInvoice } from "../../db/invoice";
import UpdateButton from "../Button/Button";

export function EditInvoice() {
  const [invoice, setInvoice] = useState(
    {
      "id": "000000000000000000",
      "guestName": "",
      "issuer": "",
      "subTotal": 0,
      "items": [
        {
          "id": "",
          "itemName": "",
          "unitPrice": 0,
          "quantity": 0,
          "amount": 0
        }
      ]
    }
  )

  const { invoiceId } = useParams()

  useEffect(() => {
    getInvoice(invoiceId).then(data => setInvoice(data))
  }, []);

  return (
    <div class="bg-slate-50">
      <div class="py-2 px-2">
        <UpdateButton title="Save" disable={false} onClick={() => { }} />
      </div>
      <div>Editing invoice {invoiceId} of guest {invoice.guestName}</div>
      <Link to=".." relative="path" >Back</Link>

      <form class="flex flex-wrap mx-1">
        {/** First Column */}
        <div class="w-full md:w-1/2 mx-1 mb-6">
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                First Name
              </label>
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" value={invoice.guestName} />
              <p class="text-red-500 text-xs italic">Please fill out this field.</p>
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                Last Name
              </label>
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Check In
              </label>
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" value={invoice.checkInDate} />
              <p class="text-red-500 text-xs italic">Please fill out this field.</p>
            </div>
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Check Out
              </label>
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" value={invoice.checkOutDate} />
              <p class="text-red-500 text-xs italic">Please fill out this field.</p>
            </div>
          </div>

          <div class="flex flex-wrap -mx-3 mb-2">
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                City
              </label>
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque" />
            </div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                Issuer
              </label>
              <div class="relative">
                <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                  <option>Liễu Lê</option>
                  <option>Mẫn Trịnh</option>
                  <option>Hương Thanh</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                Zip
              </label>
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210" />
            </div>
          </div>
        </div>
        {/** Second Column */}
        <div class="w-full md:w-1/2 mx-1 mb-6">
          <table class="table-auto">
            <thead>
              <tr>
                <th class="px-4 py-2">Item Name</th>
                <th class="px-4 py-2">Unit Price</th>
                <th class="px-4 py-2">Quantity</th>
                <th class="px-4 py-2">Amount</th>
              </tr>
            </thead>
            <tbody>
              {invoice.items.map((item) => {
                return (
                  <tr class="bg-gray-100">
                    <td class="border px-4 py-2">{item.itemName}</td>
                    <td class="border px-4 py-2 text-right">{item.unitPrice.toLocaleString('us-US', { style: 'currency', currency: 'VND' })}</td>
                    <td class="border px-4 py-2 text-right">{item.quantity}</td>
                    <td class="border px-4 py-2 text-right">{item.amount.toLocaleString('us-US', { style: 'currency', currency: 'VND' })}</td>
                    <td class="border px-4 py-2">+</td>
                    <td class="border px-4 py-2">-</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </form>
    </div >
  );
}
