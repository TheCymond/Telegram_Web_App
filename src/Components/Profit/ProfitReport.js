import { useState, useEffect } from "react";
import UpdateButton from "../Button/Button";
import { getProfitReportThisMonth } from "../../db/profit";

export function ProfitReport() {
  const [report, setReport] = useState({
    totalIncomeAmount: 0,
    totalExpenseAmount: 0,
    totalProfitAmount: 0,
    services: [
      {
        displayName: "",
        incomeAmount: 0,
        expenseAmount: 0,
        profitAmount: 0
      }
    ],
    peoples: [
      {
        displayName: "",
        incomeAmount: 0,
        expenseAmount: 0,
        profitAmount: 0
      }
    ]
  })

  useEffect(() => {
    getProfitReportThisMonth().then(data => setReport(data))
  }, []);



  return (
    <div class="bg-slate-50">
      <div class="py-2 px-2">
        <UpdateButton title="Update" disable={false} onClick={() => {
          getProfitReportThisMonth().then(data => setReport(data))
        }} />
      </div>

      <table class="table-auto border-separate text-xl border-spacing-0 font-sans px-2 w-11/12" >
        <thead class="bg-slate-200">
          <tr class="text-xl font-semibold">
            <th class="" />
            <th class="px-2 pl-4 text-right text-green-900">Revenue</th>
            <th class="px-2 text-center text-green-900">Expense</th>
            <th class="px-2 text-center text-green-900">Profit</th>
          </tr>
        </thead>
        <tbody>
          <td class="font-bold italic text-sm">GENERAL</td><td /><td />
          <tr class="text-sm">
            <td class="text-center "></td>
            <td class="px-2 text-right font-mono ">{report.totalIncomeAmount.toLocaleString('us-US', { style: 'currency', currency: 'VND' })}</td>
            <td class="px-2 text-right font-mono">{report.totalExpenseAmount.toLocaleString('us-US', { style: 'currency', currency: 'VND' })}</td>
            <td class="px-2 text-right font-mono">{report.totalProfitAmount.toLocaleString('us-US', { style: 'currency', currency: 'VND' })}</td>
          </tr>

          <td class="font-bold italic text-sm">SERVICES</td><td /><td />
          {report.services.map((serv) => {
            return (
              <tr class="text-sm">
                <td class="text-center">{serv.displayName}</td>
                <td class="px-2 text-right font-mono">{serv.incomeAmount.toLocaleString('us-US', { style: 'currency', currency: 'VND' })}</td>
                <td class="px-2 text-right font-mono">{serv.expenseAmount.toLocaleString('us-US', { style: 'currency', currency: 'VND' })}</td>
                <td class="px-2 text-right font-mono">{serv.profitAmount.toLocaleString('us-US', { style: 'currency', currency: 'VND' })}</td>
              </tr>
            )
          })}

          <td class="font-bold italic text-sm">MEMBERS</td><td /><td />
          {report.peoples.map((peop) => {
            return (
              <tr class="text-sm">
                <td class="text-center">{peop.displayName}</td>
                <td class="px-2 text-right font-mono">{peop.incomeAmount.toLocaleString('us-US', { style: 'currency', currency: 'VND' })}</td>
                <td class="px-2 text-right font-mono">{peop.expenseAmount.toLocaleString('us-US', { style: 'currency', currency: 'VND' })}</td>
                <td class="px-2 text-right font-mono">{peop.profitAmount.toLocaleString('us-US', { style: 'currency', currency: 'VND' })}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div >
  );
}
