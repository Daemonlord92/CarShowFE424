

export const fetchCars = async () => {
    const result = await fetch('http://localhost:8080/api/v1/car/');
    const data = await result.json()
    console.log(data)
    return data
}

export const postNewCar = async (data) => {
    const result = await fetch('http://localhost:8080/api/v1/car/new/',{
        method: 'POST',
        body: data,
        headers: {
            "Content-Type" : "application/json",
            "Authorization" : `Bearer ${JSON.parse(sessionStorage.getItem("Authorization"))}`,
            "Access-Control-Allow-Origin": "http://localhost:5173"
        }
    })
    const ret = await result.json();
    return ret;
}

export const updateCar = async (data) => {
    console.log(data)
    const result = await fetch ('http://localhost:8080/api/v1/car/update/', {
        method: 'PUT',
        body: data,
        headers: {
            "Content-Type" : "application/json",
            "Authorization" : `Bearer ${JSON.parse(sessionStorage.getItem("Authorization"))}`,
            "Access-Control-Allow-Origin": "http://localhost:5173"
        }
    })
    return await result.json()
}