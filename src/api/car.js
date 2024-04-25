

export const fetchCars = async () => {
    const result = await fetch('http://localhost:8080/api/v1/car/');
    const data = await result.json()
    console.log(data)
    return data
}

export const postNewCar = async (data) => {
    const result = await fetch('http://localhost:8080/api/v1/car/',{
        method: 'post',
        body: data
    })
    const ret = await result.json();
    return ret;
}