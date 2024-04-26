import React from "react";
import { Modal, Button, Box, InputLabel, Input, FormControl } from "@mui/material";
import HandleMutation from "../helper/HandleMutation";
import { postNewCar } from "../api/car";

class CreateCar extends React.Component {
    constructor() {
         super()
        this.state= {
            open: false,
            make: '',
            model: '',
            vin: '',
            year: '',
            mileage: ''
        };
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleMutation = this.handleMutation.bind(this);
        this.handleChange = this.handleChange.bind(this);

        }
    
    handleMutation = () => {
        const { mutation } = this.props;
        console.log(this.props)
        console.log(mutation)
        this.props.mutation.mutate(JSON.stringify({
            make: this.state.make,
            model: this.state.model,
            vin: this.state.vin,
            year: this.state.year,
            mileage: this.state.mileage
        }));
        this.handleClose()
    }
    handleOpen = () => {
        this.setState({open: true});
    }

    handleClose = () => {
        this.setState({open: false});
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
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
                        <Input id="make" value={this.state.make} onChange={this.handleChange}/>
                    </FormControl >
                    <FormControl sx={{my: 1}}>
                        <InputLabel htmlFor="model">
                            Model:
                        </InputLabel>
                        <Input id="model" value={this.state.model} onChange={this.handleChange}/>
                    </FormControl >
                    <FormControl sx={{my: 1}}>
                        <InputLabel htmlFor="vin">
                            VIN:
                        </InputLabel>
                        <Input id="vin" value={this.state.vin} onChange={this.handleChange}/>
                    </FormControl>
                    <FormControl sx={{my: 1}}>
                        <InputLabel htmlFor="year">
                            Year:
                        </InputLabel>
                        <Input id="year" value={this.state.year} onChange={this.handleChange}/>
                    </FormControl>
                    <FormControl sx={{my: 1}}>
                        <InputLabel htmlFor="mileage">
                            Mileage
                        </InputLabel>
                        <Input id="mileage" value={this.state.mileage} onChange={this.handleChange}/>
                    </FormControl>
                    <Button onClick={this.handleMutation}>
                        Submit
                    </Button>
                </Box>
                </Modal>
            </>
        )
    }
}

export default CreateCar;