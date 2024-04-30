import { AppBar, Toolbar, Typography } from '@mui/material'
import './App.css'
import CarList from './components/CarList'
import Login from './components/Login'

function App() {
  return (
    <>
      <AppBar position='static'>
        <Toolbar>
          <Typography align='center' variant='h2'>
            Car Show 🚗🚘
          </Typography>
          <Login/>
        </Toolbar>
      </AppBar>
      <CarList />
    </>
  )
}

export default App
