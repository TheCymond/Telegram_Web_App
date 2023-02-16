const requestOptions = {
  method: 'GET',

}

const getData = () => {
  console.info("Fetching report from backend")
  return fetch('https://vom-assistant.hopto.org/api/profit/report-this-month', requestOptions)
    .then(response => response.json())
}

export default getData;