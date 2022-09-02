
import { useQuery } from '@apollo/client';
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Paper, Select } from '@mui/material';
import * as React from 'react';
import { useParams } from 'react-router-dom';
import Typography from '../components/Typography';
import { GET_ROOM } from '../utils/queries';
import RoomPhoto from '../views/images/dragon.jpg'

const RoomPage = () => {
  const { id } = useParams()
  const {loading, error, data: roomdata} = useQuery(GET_ROOM, {
    variables: {
      roomId: id
    }
  })
  

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  console.log(roomdata)

  return (
    <Grid container>
      <Grid item md={8} xs={12} >
        <Grid container justifyContent='center' >
          <Typography variant='h2' >{roomdata.room.name}</Typography> 
        </Grid>
        <Grid container justifyContent='center'>
          {/* room photo*/}
          <Box
            component='img'
            src={roomdata.room.imageLocation}
            sx={{
              width: '80%',
              mt: 5,
            }}>
          </Box>
        </Grid>
        <Grid>
          <Grid container justifyContent='center'>
            {/* Room Description */}
            <Typography variant='h5' sx={{ width: '65%', mt: 5 }}>{roomdata.room.description}</Typography>
          </Grid>
          <Grid container justifyContent='center'>
            {/* Room Statistics */}
            <Typography variant='h5' sx={{ width: '65%', mt: 5, mb: 5 }}>Room Success Rate: {roomdata.room.successRate}%</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={3} xs={12} sx={{ border: 'solid 5px black', mt: 5, mb: 5, boxSizing: 'border-box',  }}>
        <Grid container justifyContent='center'>
          {/* Room Hours and Location  */}
          <Paper elevation={2} sx={{ width: '95%', mt: 2, }}>
            <Typography variant='h5' sx={{ ml: 2, mt: 2 }}>Room Hours</Typography>
            <Typography sx={{ ml: 2, mt: 1 }}>Monday: 6:30pm, 7:30pm, 9:30pm</Typography>
            <Typography sx={{ ml: 2, mt: 1 }}>Tuesday: 6:30pm, 7:30pm, 9:30pm</Typography>
            <Typography sx={{ ml: 2, mt: 1 }}>Wednesday: 6:30pm, 7:30pm, 9:30pm</Typography>
            <Typography sx={{ ml: 2, mt: 1 }}>Thursday: 6:30pm, 7:30pm, 9:30pm</Typography>
            <Typography sx={{ ml: 2, mt: 1 }}>Friday: 6:30pm, 7:30pm, 9:30pm</Typography>
            <Typography sx={{ ml: 2, mt: 1 }}>Saturday: 6:30pm, 7:30pm, 9:30pm</Typography>
            <Typography sx={{ ml: 2, mt: 1, mb: 1 }}>Sunday: 6:30pm, 7:30pm, 9:30pm</Typography>
          </Paper>
        </Grid>
        <Grid container justifyContent='center'>
          {/* Location Address and Number */}
          <Paper elevation={2} sx={{ width: '95%', mt: 2, }}>
            <Typography variant='h5' sx={{ ml: 2, mt: 1 }}>Address:</Typography>
            <Typography sx={{ ml: 2, mt: 1 }}>555 E El Camino Real</Typography>
            <Typography sx={{ ml: 2, mt: 1 }}>Sunnyvale, Ca</Typography>
            <Typography sx={{ ml: 2, mt: 1 }}>85221</Typography>

            <Typography variant='h5' sx={{ ml: 2, mt: 1 }}>Phone Number</Typography>
            <Typography sx={{ ml: 2, mt: 1, mb: 2 }}> 303 303 3033</Typography>
          </Paper>
        </Grid>
        <Grid container justifyContent='center' alignContent='space-between'>
          {/* Buy Box */}

          <Paper elevation={2} sx={{ width: '95%', mt: 2, height: '95%' }}>
            <Typography variant='h4' sx={{ ml: 2, mt: 1, textAlign: 'center' }}>Book Now!</Typography>
            <Grid container justifyContent='center' >
            <FormControl sx={{ width: '88%'}}>
              <Typography >How many Members in your group?</Typography>
              <InputLabel id="demo-simple-select-label" ></InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value=''
                label="Age"
              >
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={6}>6</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ width: '88%' }}>
              <Typography sx={{ mt: 3 }}>Choose a TimeSlot</Typography>
              <InputLabel id="demo-simple-select-label"></InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value=''
                label="Age"
              >
                <MenuItem value={4}>6:30pm</MenuItem>
                <MenuItem value={5}>7:30pm</MenuItem>
                <MenuItem value={6}>8:30pm</MenuItem>
              </Select>
            </FormControl>
            <Button variant="contained" color="success" sx={{mt: 2, mb: 2}}>
              Checkout
            </Button>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  )
}




export default RoomPage;