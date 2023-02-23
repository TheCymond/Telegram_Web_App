const requestOptions = {
  method: 'GET',

}

export const getProfitReportThisMonth = () => {
  console.info("Fetching report from backend")
  return fetch(`${process.env.REACT_APP_PROFIT_SERVICE_ENDPOINT}/api/profit/report-this-month`, requestOptions)
    .then(response => response.json())
}