const requestOptions = {
  method: 'GET'
}

export const listLatestInvoices = () => {
  console.info("Fetching report from backend")
  return fetch('https://vom-assistant.hopto.org/api/invoice/list?max=7', requestOptions)
    .then(response => response.json())
}

export default listLatestInvoices;