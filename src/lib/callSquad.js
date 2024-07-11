export async function callSquad(number) {
  const url = 'https://api.vapi.ai/call/phone'
  const authToken = '01eed121-d36f-4fd0-a14a-1115a1ba99ea'
  
  const phoneNumber = `+1${number.replace(/\D/g, '').slice(-10)}`;

  const body = {
    phoneNumberId: '2d619f23-41c1-40b8-b119-98b119d89af8',
    agentId: '31efc58e-9a21-4fed-9dda-817e99041ddd', // I Heart Mac & Cheese
    customer: {
      number: phoneNumber,
    },
  }

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify(body),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const data = await response.json()
    console.log('Response:', data)
  } catch (error) {
    console.error('Error:', error)
  }
}
