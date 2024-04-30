import { Button, Modal, Box, FormControl, Input, InputLabel } from "@mui/material"
import UpdateIcon from '@mui/icons-material/Update';
import { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCar } from "../api/car";

export default function UpdateCar(data) {
    const [open, setOpen] = useState(false)
    const query = useQueryClient()
    const mutation = useMutation({
        mutationFn: updateCar,
        onSuccess: (data) => {
            alert(`Success: ${data}` )
            query.invalidateQueries()
        },
        onError:(error) => {
            alert(`Error: ${error}`)
        }  
        })
    const [car, setCar] = useState({
        id: data.data.id,
        make: data.data.make,
        model: data.data.model,
        vin: data.data.vin,
        year: data.data.year,
        mileage: data.data.mileage
    })

    useEffect(() => {
        setCar({
            id: data.data.id,
            make: data.data.make,
            model: data.data.model,
            vin: data.data.vin,
            year: data.data.year,
            mileage: data.data.mileage
        })
    }, [])
    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleChange = (event) => {
        
        setCar({
            ...car,
            [event.target.id]: event.target.value
        })
    }

    const handleSubmit = () => {
        mutation.mutate(JSON.stringify(car))
        handleClose()
    }
    
  return (
    <>
                <Button onClick={handleOpen}><UpdateIcon/></Button>
                <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box component="form" className="modal-card" >
                    <FormControl sx={{my: 1}}>
                        <InputLabel htmlFor="make">
                            Make:
                        </InputLabel>
                        <Input id="make" value={car.make} onChange={(e) =>handleChange(e)}/>
                    </FormControl >
                    <FormControl sx={{my: 1}}>
                        <InputLabel htmlFor="model">
                            Model:
                        </InputLabel>
                        <Input id="model" value={car.model} onChange={(e) =>handleChange(e)}/>
                    </FormControl >
                    <FormControl sx={{my: 1}}>
                        <InputLabel htmlFor="vin">
                            VIN:
                        </InputLabel>
                        <Input id="vin" value={car.vin} onChange={(e) =>handleChange(e)}/>
                    </FormControl>
                    <FormControl sx={{my: 1}}>
                        <InputLabel htmlFor="year">
                            Year:
                        </InputLabel>
                        <Input id="year" value={car.year} onChange={(e) =>handleChange(e)}/>
                    </FormControl>
                    <FormControl sx={{my: 1}}>
                        <InputLabel htmlFor="mileage">
                            Mileage
                        </InputLabel>
                        <Input id="mileage" value={car.mileage} onChange={(e) =>handleChange(e)}/>
                    </FormControl>
                    <Button onClick={handleSubmit}>
                        Submit
                    </Button>
                </Box>
                </Modal>
            </>
  )
}
