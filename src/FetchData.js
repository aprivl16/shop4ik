export const url = "http://localhost:3001/shopItems";
export const REQUEST_ABORTED = "aborted";

export const fetchGetShopItems = async (signal) => {
  try {
    const request = await fetch(url, { signal });
    const data = await request.json()
    return data
  }
  catch (err) {
    if (err.name === 'AbortError') {
      return REQUEST_ABORTED;
    }
    else {
      console.error(err.message)
    }
  }
}

export const fetchAddShopItem = async (bodyData) => {
  await fetch(url, {
    method: "POST",
    body: JSON.stringify(bodyData),
    headers: {
      "Content-Type": "application/json",
    }
  })
}

