import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import UpdateButton from "../Button/Button";

export function EditInvoice() {
  const [invoices, setInvoices] = useState([
    {
      "id": "000000000000000000",
      "guestName": "",
      "issuer": "",
      "subTotal": 0
    }
  ])

  useEffect(() => {
  }, []);

  const { invoiceId } = useParams()


  return (
    <div class="bg-slate-50">
      <div class="py-2 px-2">
        <UpdateButton title="Save" disable={false} onClick={() => {}} />
      </div>
      <div>Editing invoice {invoiceId}</div>
      <Link to=".." relative="path" >Back</Link>
    </div >
  );
}
