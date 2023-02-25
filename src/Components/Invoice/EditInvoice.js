import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getInvoice } from "../../db/invoice";
import { EditItem } from "./EditItem";
import UpdateButton from "../Button/Button";
import { TextInput, Label } from 'flowbite-react';

import { AddItem } from "./AddItem";
import { SelectIssuer } from "./SelectIssuer";

export const EditInvoice = () => {
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

  const { invoiceId } = useParams()

  useEffect(() => {
    console.info("Eding invoice %s", invoiceId)
    getInvoice(invoiceId).then(data => setInvoice(data))
  }, [invoiceId]);

  const handleSaveItem = (item) => {
    console.info("Item %s is updated", item.id)
    const nItems = invoice.items.map((i) => i.id === item.id ? item : i)

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
  }

  const handleDeleteItem = (item) => {
    console.info("Item %s is deleted", item.id)
    const nItems = invoice.items.filter((it) => it.id !== item.id)
    let ta = nItems.map(({ amount }) => amount).reduce((a1, a2) => a1 + a2, 0)
    const inv = {
      ...invoice,
      items: nItems,
      subTotal: ta
    }

    setInvoice(inv)
  }


  const onDataChange = (e) => {
    const inv = {
      ...invoice,
      [e.target.id]: e.target.value
    }
    setInvoice(inv)
  }

  const onIssuerChange = (member) => {
    console.log("Selected: %s", member.issuerId)
    const inv = {
      ...invoice,
      issuerId: member.issuerId,
      issuer: member.issuer
    }

    setInvoice(inv)
  }

  const handleSaveInvoice = () => {
    console.info("Saving invoice")
    console.log(invoice)
  }

  const handleAddItem = (addedItem) => {
    console.log("Added an item into invoice")
    console.log(addedItem)
    let items = [
      ...invoice.items,
      {
        id: addedItem.id,
        itemName: addedItem.name,
        unitPrice: addedItem.price,
        quantity: 1,
        amount: addedItem.price
      }
    ]
    let ta = items.map(({ amount }) => amount).reduce((a1, a2) => a1 + a2, 0)
    const inv = {
      ...invoice,
      items: items,
      subTotal: ta
    }
    setInvoice(inv)
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
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            {/* <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" class="h-5 w-5 text-gray-500 dark:text-gray-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg></div> */}
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
                rightIcon={() => {
                  return (
                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                  )
                }}
              />
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
                rightIcon={() => {
                  return (
                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                  )
                }}
              />
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
              <SelectIssuer is={{ issuerId: invoice.issuerId, issuer: invoice.issuer }}
                fncChangeIssuer={onIssuerChange} />
              {/* <Select
                id="issuer"
                required={true}
                onChange={onIssuerChange}
                value={invoice.issuerId}
              >
                {
                  issuers.map((iss, i) => {
                    return (
                      <option key={iss.issuerId} value={iss.issuerId}
                      >
                        {iss.issuer}
                      </option>
                    )
                  })
                }
              </Select> */}
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
                    <td class="border px-4 py-2">{<EditItem eItem={item} onSave={handleSaveItem} onDelete={handleDeleteItem} />}</td>
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
            <AddItem fncAddItem={handleAddItem}></AddItem>
          </div>
        </div>
      </form>


    </div >
  );
}
