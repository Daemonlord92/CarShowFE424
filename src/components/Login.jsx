import { Button, Modal, Box, FormControl, Input, InputLabel } from "@mui/material"
import { useState } from "react"
import LoginIcon from '@mui/icons-material/Login';
import { useMutation } from "@tanstack/react-query";

export default function Login() {
    const [open, setOpen] = useState(false)
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })
    const mutation = useMutation({
        mutationFn: async (data) => {
            const result = await fetch('http://localhost:8080/api/v1/auth/login', {
                method: 'POST',
                body: data,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            return await result.text()
        },
        onSuccess: (data) => {
            alert(`Success: ${data}` )
            sessionStorage.setItem('Authorization', JSON.stringify(data))
            handleClose()
        },
        onError:(error) => {
            alert(`Error: ${error}`)
        }  
        })

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleSubmit = () => {
        mutation.mutate(JSON.stringify(loginData))
    }
  return (
            <>
                <Button onClick={handleOpen}><LoginIcon color="action"/></Button>
                <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box component="form" className="modal-card" >
                    <FormControl sx={{my: 1}}>
                        <InputLabel htmlFor="email">
                            Email:
                        </InputLabel>
                        <Input id="email" value={loginData.email} onChange={(e) =>setLoginData({...loginData, [e.target.id]: e.target.value})}/>
                    </FormControl >
                    <FormControl sx={{my: 1}}>
                        <InputLabel htmlFor="password">
                            Password:
                        </InputLabel>
                        <Input id="password" value={loginData.password} onChange={(e) =>setLoginData({...loginData, [e.target.id]: e.target.value})}/>
                    </FormControl >
                    <Button onClick={handleSubmit}>
                        Submit
                    </Button>
                </Box>
                </Modal>
            </>
  )
}
