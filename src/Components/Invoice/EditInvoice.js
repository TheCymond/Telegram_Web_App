import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getInvoice } from "../../db/invoice";
import { EditItem } from "./EditItem";
import UpdateButton from "../Button/Button";
import { TextInput, Label, Select } from 'flowbite-react';
import "flowbite";
import { getIssuers } from "../../db/invoice";

export function EditInvoice() {
  const [invoice, setInvoice] = useState(
    {
      "id": "000000000000000000",
      "guestName": "",
      "issuer": "",
      "issuerId": "",
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

  const issuers = getIssuers()

  const { invoiceId } = useParams()

  useEffect(() => {
    getInvoice(invoiceId).then(data => setInvoice(data))
  }, []);

  const onItemSave = (item) => {
    console.info("Item %s is updated", item.id)
    const nItems = invoice.items.map((i) => i.id == item.id ? item : i)

    var total = 0;
    for (var i in nItems) {
      total += nItems[i].amount;
    }

    const inv = {
      ...invoice,
      items: nItems,
      subTotal: total
    }

    setInvoice(inv)
    console.log(invoice)
  }

  const onDataChange = (e) => {
    const inv = {
      ...invoice,
      [e.target.id]: e.target.value
    }
    setInvoice(inv)
  }

  const onIssuerChange = (e) => {
    console.log("Selected: %s", e.target.value)

    let iss = issuers.find((i) => i.issuerId == e.target.value)
    const inv = {
      ...invoice,
      issuerId: e.target.value,
      issuer: iss != null ? iss.issuer : invoice.issuer
    }

    setInvoice(inv)
  }

  const handleSaveInvoice = () => {
    console.info("Saving invoice")
    console.log(invoice)
  }
  return (
    <div class="bg-slate-50">
      <div class="py-2 px-2">
        <UpdateButton title="Save" disable={false} onClick={handleSaveInvoice} />
        <Link to=".." relative="path" >Back</Link>
      </div>
      <form class="flex flex-wrap mx-1">
        {/** First Column */}
        <div class="w-full md:w-1/2 mx-1 mb-6">
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <div className="mb-2 block">
                <Label
                  htmlFor="guestName"
                  value="Guest Name"
                />
              </div>
              <TextInput
                id="guestName"
                placeholder="John Smith"
                required={true}
                value={invoice.guestName}
                onChange={onDataChange}
              />
              <p class="text-red-500 text-xs italic">Please fill out this field.</p>
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">

              <div className="mb-2 block">
                <Label
                  htmlFor="checkInDate"
                  value="Check In"
                />
              </div>
              <TextInput
                id="checkInDate"
                placeholder="1"
                required={true}
                value={invoice.checkInDate}
                readOnly={false}
                type="date"
                onChange={onDataChange}
              />
              <p class="text-red-500 text-xs italic">Please fill out this field.</p>
            </div>
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <div className="mb-2 block">
                <Label
                  htmlFor="checkOutDate"
                  value="Check Out"
                />
              </div>
              <TextInput
                id="checkOutDate"
                placeholder="1"
                required={true}
                value={invoice.checkOutDate}
                readOnly={false}
                type="date"
              />
              <p class="text-red-500 text-xs italic">Please fill out this field.</p>
            </div>
          </div>

          <div class="flex flex-wrap -mx-3 mb-2">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <div className="mb-2 block">
                <Label
                  htmlFor="issuer"
                  value="Issuer"
                />
              </div>
              <Select
                id="issuer"
                required={true}
                onChange={onIssuerChange}
                value={invoice.issuerId}
              >
                {
                  issuers.map((iss, i) => {
                    return (
                      <option key={iss.issuerId} value={iss.issuerId}>
                        {iss.issuer}
                      </option>
                    )
                  })
                }
              </Select>
            </div>
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <div className="mb-2 block">
                <Label
                  htmlFor="totalAmount"
                  value="Total Amount"
                />
              </div>
              <TextInput
                id="totalAmount"
                placeholder="100000"
                required={true}
                value={invoice.subTotal}
                readOnly={true}
              />
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
                  <tr class="bg-gray-100" key={item.id}>
                    <td class="border px-4 py-2">{item.itemName}</td>
                    <td class="border px-4 py-2 text-right">{item.unitPrice.toLocaleString('us-US', { style: 'currency', currency: 'VND' })}</td>
                    <td class="border px-4 py-2 text-right">{item.quantity}</td>
                    <td class="border px-4 py-2 text-right">{item.amount.toLocaleString('us-US', { style: 'currency', currency: 'VND' })}</td>
                    <td class="border px-4 py-2">{<EditItem eItem={item} onSave={onItemSave} />}</td>
                  </tr>
                )
              })}
              <tr class="bg-gray-100 font-bold">
                <td class="border px-4 py-2">Sub Total</td>
                <td class="border px-4 py-2 text-right"></td>
                <td class="border px-4 py-2 text-right"></td>
                <td class="border px-4 py-2 text-right">{invoice.subTotal.toLocaleString('us-US', { style: 'currency', currency: 'VND' })}</td>
                <td class="border px-4 py-2 text-right"></td>
              </tr>
            </tbody>
          </table>
          <div class="py-2 px-2">
            <UpdateButton title="+ Item" disable={false} onClick={() => { }} />
          </div>
        </div>
      </form>


    </div >
  );
}
