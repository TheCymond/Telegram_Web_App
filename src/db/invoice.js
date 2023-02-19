const requestOptions = {
  method: 'GET'
}

const listLatestInvoices = () => {
  console.info("Fetching report from backend")
  return fetch('https://vom-assistant.hopto.org/api/invoice/list?max=15', requestOptions)
    .then(response => response.json())
}

export default listLatestInvoices;

export function getInvoice(invoiceId) {
  console.info("Fetching invoice from backend")
  return fetch(`https://vom-assistant.hopto.org/api/invoice/${invoiceId}`, requestOptions)
    .then(response => response.json())
}

export function getIssuers() {
  return [{ issuerId: "1351151927", issuer: "Mẫn Trịnh" },
  { issuerId: "5114683375", issuer: "Liễu Lê" },
  { issuerId: "6159537383", issuer: "Hương Thanh" }]
}