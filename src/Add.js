import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import FlightIcon from '@mui/icons-material/Flight';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {  createTheme,ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import Particle from './components/Particle'


//install toastify here
import { toast, Toaster } from "react-hot-toast";
import 'react-toastify/dist/ReactToastify.css';

const defaultTheme = createTheme();
function Add({state}){

    const [id,setId] = React.useState(null);
    const [image,setImage] = React.useState(null);
    const [name,setName] = React.useState(null);
    const [model,setModel] = React.useState(null);

    const navigateTo = useNavigate();

    const handleSubmit = async(event)=>{
            event.preventDefault();
            const transaction = await state.contract.addFlights(image,name,model,id);
            await transaction.wait();
            toast.success('Transaction is done');
            setTimeout(()=>{
                navigateTo('/')
            },4000);
    }
return (
    <>
     <ThemeProvider theme={defaultTheme}>
  <Container component="main" maxWidth="xs">
    <CssBaseline />
    <Box
      sx={{
        marginTop: 15,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: 'white', // Set the text color to white
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
        <FlightIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Enter Flight Details
      </Typography>
      <Box component="form" noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="Id"
          label="Flight Id"
          name="Flight Id"
          autoFocus
          onChange={(e) => setId(e.target.value)}
          InputLabelProps={{
            style: { color: 'white' }, // Set the label color to white
          }}
          InputProps={{
            style: { color: 'white', borderColor: 'white' }, // Set the input color and border color to white
          }}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="Image"
          label="Image"
          name="Image"
          autoComplete="text"
          autoFocus
          onChange={(e) => setImage(e.target.value)}
          InputLabelProps={{
            style: { color: 'white' },
          }}
          InputProps={{
            style: { color: 'white', borderColor: 'white' },
          }}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="name"
          label="Name"
          name="name"
          autoComplete="text"
          autoFocus
          onChange={(e) => setName(e.target.value)}
          InputLabelProps={{
            style: { color: 'white' },
          }}
          InputProps={{
            style: { color: 'white', borderColor: 'white' },
          }}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="text"
          label="Model"
          type="text"
          id="model"
          onChange={(e) => setModel(e.target.value)}
          InputLabelProps={{
            style: { color: 'white' },
          }}
          InputProps={{
            style: { color: 'white', borderColor: 'white' },
          }}
        />
        {/* Add more TextField components if needed */}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={handleSubmit}
        >
          SUBMIT
        </Button>
        <Toaster toastOptions={{ duration: 4000 }} />
      </Box>
    </Box>
  </Container>
  <Particle />
</ThemeProvider>


    </>

  );
}

export default Add;
