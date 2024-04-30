import { TableCell, TableRow } from "@mui/material"
import UpdateCar from "./UpdateCar"

export default function CarRow({id, make, model, vin, year, mileage}) {
    return (
        <TableRow key={id}>
            <TableCell>{make}</TableCell>
            <TableCell>{model}</TableCell>
            <TableCell>{vin}</TableCell>
            <TableCell>{year}</TableCell>
            <TableCell>{mileage}</TableCell>
            <TableCell><UpdateCar data={{id, make, model, vin, year, mileage}} /></TableCell>
        </TableRow>
    )
}
