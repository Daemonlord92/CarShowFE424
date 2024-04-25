import { TableContainer, Table, Paper, TableHead, TableRow, TableCell, TableBody } from "@mui/material"
import { useQuery } from "@tanstack/react-query"
import CarRow from "./CarRow";
import CreateCar from "./CreateCar";
import { fetchCars } from "../api/car";

const CarList = () => {
    const { data, error, isLoading } = useQuery({
        queryKey: ['cars'],
        queryFn: fetchCars
    })

    console.log(data)

    if(isLoading) return <div>Loading...</div>

    return(
        <>
            <CreateCar/>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Make</TableCell>
                            <TableCell>Model</TableCell>
                            <TableCell>VIN</TableCell>
                            <TableCell>Year</TableCell>
                            <TableCell>Mileage</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            data.map(car => (
                                <CarRow 
                                key={car.id} 
                                id={car.id} 
                                make={car.make} 
                                model={car.model} 
                                vin={car.vin} 
                                year={car.year} 
                                mileage={car.mileage}  />
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default CarList