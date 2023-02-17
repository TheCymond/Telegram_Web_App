import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getInvoice } from "../../db/invoice";
import UpdateButton from "../Button/Button";

export function EditInvoice() {
  const [invoice, setInvoice] = useState([
    {
      "id": "000000000000000000",
      "guestName": "",
      "issuer": "",
      "subTotal": 0
    }
  ])

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
    </div >
  );
}
