


const UseData = async (API_URL,API_KEY) => {
    // const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NmJmY2U5MDA3MzJhOWVjMjVhZTNhZTYwNDI3YTg3ZiIsIm5iZiI6MTcyOTc2MzE1MS45MDQ2MDMsInN1YiI6IjY3MTlmZjRkNDU0MmUzNzFmZTBhNGExMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qbcUHaB08vKAYjycD8iy3q2SZsBbkrQBja5Mfr1b41g";
    const Options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`
        }
    }

    const response = await fetch(API_URL, Options);
    const data = await response.json();
    return data;
}

export {UseData};