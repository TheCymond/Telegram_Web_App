import { useState, useEffect } from "react";
import UpdateButton from "../Button/Button";
import listLatestInvoices from "../../db/invoice";
import { Link } from "react-router-dom";
import { Table } from "flowbite-react";


export function InvoiceManager() {
  const [invoices, setInvoices] = useState([
    {
      "id": "000000000000000000",
      "guestName": "",
      "issuer": "",
      "issuerId": "",
      "subTotal": 0
    }
  ])

  useEffect(() => {
    listLatestInvoices().then(data => setInvoices(data))
  }, []);



  return (
    <div>
      <div class="py-2 px-2">
        <UpdateButton title="+ Add" disable={false} onClick={() => {
        }} />
      </div>
      <Table hoverable={true}>
        <Table.Head>
          <Table.HeadCell>
            Guest Name
          </Table.HeadCell>
          <Table.HeadCell>
            Issuer
          </Table.HeadCell>
          <Table.HeadCell>
            Grand Amount
          </Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">
              Edit
            </span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {invoices.map((inv) => {
            return (
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {inv.guestName}
                </Table.Cell>
                <Table.Cell>
                  {inv.issuer}
                </Table.Cell>
                <Table.Cell>
                  {inv.subTotal.toLocaleString('us-US', { style: 'currency', currency: 'VND' })}
                </Table.Cell>
                <Table.Cell>
                  <Link to={inv.id} className="font-medium text-blue-600 hover:underline dark:text-blue-500">Edit</Link>
                </Table.Cell>
              </Table.Row>
            )
          })}
        </Table.Body>
      </Table>
    </div >
  );
}
