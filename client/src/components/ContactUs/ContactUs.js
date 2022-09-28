import {  Grid, Paper } from "@mui/material";
import Typography from "../onePirate/modules/components/Typography";


const Contact = () => {


  return (
    <Grid container justifyContent='center' textAlign='center'>
      <Paper elevation={4} sx={{ width: '75%', mb: "10px", mt: '10px' }}>
        <Typography variant='h4'>
          Address:
        </Typography>
        <Typography sx={{mb: '15px'}}>
          6000 E Evans Ave #3-205, Denver, Co 80222
        </Typography>
        <Grid justifyContent='center' alignItems='center' sx={{mb: '15px'}}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3070.736081150781!2d-104.91968898462636!3d39.6781509794578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7ded14878b47%3A0xaf08d66b816aa03c!2sCOLORADO%20ESCAPE!5e0!3m2!1sen!2sus!4v1664389765047!5m2!1sen!2sus"
            title="map"
            sx={{
              width: "300",
              height: "300",
              style: "border:0;",
              allowfullscreen: "",
              loading: "lazy",
              referrerpolicy: "no-referrer-when-downgrade",
            }}></iframe>
        </Grid>
        <Grid sx={{mb: '15px'}}>
          <Typography variant='h4'>
            Phone Number: 
          </Typography>
          <Typography>
            (720) 422-7055
          </Typography>
        </Grid>
      </Paper>
    </Grid>
  )
};

export default Contact;