import { Grid } from "@mui/material";
import Typography from "../onePirate/modules/components/Typography";


const Rules = () => {


  return (
    <Grid container justifyContent='center' textAlign='center'>
      <Grid justifyContent='center' sx={{width: "80%"}}>
        {/* Scheduling Block */}
        <Grid textAlign='center' sx={{border: "double", mt: "10px"}}>
          <Typography variant='h3' sx={{ fontStyle: 'bold' }}>
            Scheduling:
          </Typography>
          <Typography>
            Tickets are available up to 3 hours before desired booking time. There is no guarantee of a private room unless you buy the room at the “booked out” price, otherwise you may be paired with other groups.
          </Typography>
        </Grid>
        {/* Arrival Info */}
        <Grid sx={{border: "double", mt: "10px"}}>
          <Typography variant='h3' sx={{ fontStyle: 'bold' }}>
            Arrival:
          </Typography>
          <Typography>
            Please arrive 15 minutes early to your booking. If you arrive 15 minutes late, your booking will be cancelled without a refund.
          </Typography>
        </Grid>
        {/* Payments and Refunds */}
        <Grid sx={{border: "double", mt: "10px"}}>
          <Typography variant='h3' sx={{ fontStyle: 'bold' }}>
            Payments and Refunds:
          </Typography>
          <Typography>
            We currently accept card payments and cash payments. Please bring exact change when paying with cash. We do not issue refunds less than 24 hours before your booking time, no exceptions.
          </Typography>
        </Grid>
        {/* Parking and Building Entry */}
        <Grid sx={{border: "double", mt: "10px", mb: "10px"}} >
          <Typography variant='h3' sx={{ fontStyle: 'bold' }}>
            Parking and Building Entry:
          </Typography>
          <Typography>
            We are located in the Plaza 6000, building 3, second floor suite 205. To enter the building, you will dial 205 at the call box. There are visitor parking spaces at the front of the complex.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
};

export default Rules;