
export const FetchData= async (url)=> {
try {
    const res = await fetch(url);
    const data = await res.json()

    return data
} catch (error) {
    console.log("Failed to fetch data:", error)
}
}

