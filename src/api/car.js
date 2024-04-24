
export const fetchCars = async () => {
    const result = await fetch('http://localhost:8080/api/v1/car/');
    const data = await result.json()
    console.log(data)
    return data
}