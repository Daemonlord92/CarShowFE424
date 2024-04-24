import { TableCell, TableRow } from "@mui/material"

export default function CarRow({id, make, model, vin, year, mileage}) {
    return (
        <TableRow key={id}>
            <TableCell>{make}</TableCell>
            <TableCell>{model}</TableCell>
            <TableCell>{vin}</TableCell>
            <TableCell>{year}</TableCell>
            <TableCell>{mileage}</TableCell>
        </TableRow>
    )
}
