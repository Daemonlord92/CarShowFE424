

export const fetchCars = async () => {
    const result = await fetch('http://localhost:8080/api/v1/car/');
    const data = await result.json()
    console.log(data)
    return data
}

export const postNewCar = async (data) => {
    const result = await fetch('http://localhost:8080/api/v1/car/',{
        method: 'POST',
        body: data,
        headers: {
            "Content-Type" : "application/json"
        }
    })
    const ret = await result.json();
    return ret;
}