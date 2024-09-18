import { useState } from 'react'

export default function Home() {
  const [dataFromAPI, setDataFromAPI] = useState(null)

  // Fetch data from the API
  const fetchData = async () => {
    // Endpoint to fetch data from the API
    const endpoint = 'http://localhost:3000/api'

    // Headers to include in the request to the API
    const headers = {
      'Content-Type': 'application/json',
      'Method': 'GET',
    }

    // Fetch data from the API
    const response = await fetch(endpoint, { headers })

    // Parse the JSON response
    const data = await response.json()
    console.log(data)

    return data
  }


  // Handle the click event on the button to fetch data from the API and update the state with the data
  const handleClick = async () => {
    const data = await fetchData()
    setDataFromAPI(data)
  }



  return (
    <>
    <h1>Home Component</h1>
      <button onClick={handleClick}>Fetch Data</button>

      {/* Display the data from the API but only after data are set */}
      {dataFromAPI && (
        <pre>
          {JSON.stringify(dataFromAPI)}
        </pre>
      )}
    </>
  )
}


