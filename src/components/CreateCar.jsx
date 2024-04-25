import React from "react";
import { Modal, Button, Box, Typography, InputLabel, Input, FormControl } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { postNewCar } from "../api/car";

class CreateCar extends React.Component {
    constructor() {
         super()
        this.state= {open: false};
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        }
    
    mutation = useMutation({
       mutationFn: postNewCar,
       onSuccess: (data) => {
        alert(`Success: ${data}` )
       },
       onError:(error) => {
        alert(`Error: ${error}`)
       }  
    })
    handleOpen = () => {
        this.setState({open: true});
    }

    handleClose = () => {
        this.setState({open: false});
    }

    render() {
        return(
            <>
                <Button onClick={this.handleOpen}>Open modal</Button>
                <Modal
                open={this.state.open}
                onClose={this.handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box component="form" className="modal-card" >
                    <FormControl sx={{my: 1}}>
                        <InputLabel htmlFor="make">
                            Make:
                        </InputLabel>
                        <Input id="make" />
                    </FormControl >
                    <FormControl sx={{my: 1}}>
                        <InputLabel htmlFor="model">
                            Model:
                        </InputLabel>
                        <Input id="model" />
                    </FormControl >
                    <FormControl sx={{my: 1}}>
                        <InputLabel htmlFor="vin">
                            VIN:
                        </InputLabel>
                        <Input id="vin" />
                    </FormControl>
                    <FormControl sx={{my: 1}}>
                        <InputLabel htmlFor="year">
                            Year:
                        </InputLabel>
                        <Input id="year" />
                    </FormControl>
                    <FormControl sx={{my: 1}}>
                        <InputLabel htmlFor="mileage">
                            Mileage
                        </InputLabel>
                        <Input id="mileage" />
                    </FormControl>
                    <Button>
                        Sumbit
                    </Button>
                </Box>
                </Modal>
            </>
        )
    }
}

export default CreateCar;