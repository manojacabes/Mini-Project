import React, { useState, useEffect } from "react";
import "./../assets/style/Allprofiles.css";
import { Grid, Typography, Button, Slider, Card, CardMedia, Paper, CircularProgress, CardContent, Dialog, DialogContent, DialogActions, DialogTitle, DialogContentText, useMediaQuery, useTheme, CardActions } from "@mui/material";
import { useAccess } from "react-access-control";
import { makeStyles } from '@mui/styles'
import Headers from '../mainlayout/Header'
import Profile from "./Profile";
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100%",
  },
  loaderSpacer: {
    height: "4px",
  },
  //  content:
  // {
  //   padding: theme.spacing(0, 2), maxWidth: "100%",
  // },
  inner: {
    minWidth: 800,
  },
  head: {
    width: '30%',
    height: '100px',
    backgroundColor: 'red'
  }
}))

export default function Allprofiles() {
  const [profile, setProfile] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [indexData, setDataIndex] = React.useState(0);
  const [maxWidth, setMaxWidth] = React.useState('sm');
  const [loading, setLoading] = React.useState(false)
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const classes = useStyles()
  const fetchData = async () => {
    const response = await fetch(
      "http://localhost:8095/profile-management/v1/profile"
    );
    if (!response.ok) {
      throw new Error("Data could not be fetched!");
    } else {
      return response.json();
    }
  };
  useEffect(() => {
    fetchData()
      .then((res) => {
        setProfile(res);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  const handleOpen = () => {
    setLoading(true);
    setDialogOpen(true);
    // setDataIndex(index);
    setLoading(false)

  }
  const handleClose = () => {
    setDialogOpen(false)
  }

  console.log(profile[indexData], 'profile')
  return (
    <>
      <Grid style={{ height: '30.5rem', display: 'flex', marginLeft: '15px', width: '100rem' }} sm={24}>
        {profile.map((item, index) => (
          <>
            <Grid style={{ display: 'flex', width: '15%', margin: '10px 10px 10px 10px ', marginLeft: '15px' }}>
              <Card sx={{ minWidth: 100, height: '60%', borderRadius: '15px', boxShadow: '5px 5px 5px 8px #3d3d3842' }}>
                <CardContent style={{ borderRadius: '10px', backgroundColor: '#b698adc2' }}>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom style={{ paddingLeft: '45px', paddingBottom: '0px' }}>
                    <img src={item.linkedInProfileUrl} style={{ height: '100px', width: '100px', borderRadius: 150 / 2, borderWidth: 1, }} />
                    <img src={item.latestCompanyDetails.logo_url} style={{ height: '40px', width: '40px', borderRadius: 40 / 2, borderWidth: 1, marginTop: '100px', marginLeft: '-30px' }} />
                  </Typography>

                  <br />

                  <Typography style={{ margin: '-26px 0px -24px 20px', fontWeight: 700 }} >
                    {item.firstname} {item.lastname}(   {item.department})
                  </Typography><br />
                  <Typography >
                    {item.latestCompanyDetails.company}
                  </Typography>
                  <Typography style={{ margin: '0px 0px 0px 77px' }}>
                    {item.batch}
                  </Typography>
                  {/* <Typography style={{ margin: '0px 0px 0px 77px' }}>
                    {item.department}
                  </Typography> */}


                  <Button size="small" style={{ color: '#ffffff', marginLeft: '103px', width: '60%', fontWeight: 700 }} disabled={loading} onClick={handleOpen}>Learn More</Button>
                </CardContent>
              </Card>
            </Grid>
          </>

        ))}
        <Dialog
          fullScreen={fullScreen}
          open={dialogOpen}
          // value={profile}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">
            {profile[indexData]?.firstname} {profile[indexData]?.lastname}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              <Typography style={{
                fontWeight
                  : 700
              }}>
                MOBILE No:
              </Typography>
              <Typography> {profile[indexData]?.mobileNo}</Typography>
              <Typography style={{ fontWeight: 700 }}>      Email ID :</Typography>
              <Typography> {profile[indexData]?.emailId}</Typography>

              <Typography style={{ fontWeight: 700 }}>
                LinkedIn URL :
              </Typography>
              <Typography>{profile[indexData]?.linkedInUrl}</Typography>
              <Typography style={{ fontWeight: 700 }}>Current Occupation :</Typography>
              <Typography>{profile[indexData]?.currentOccupation}</Typography>
              {/* <Typography>
                LinkedIn Url :{profile[indexData]?.linkedInUrl}
              </Typography>
              <Typography>
                LinkedIn Url :{profile[indexData]?.linkedInUrl}
              </Typography> */}

            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              cancel
            </Button>
            {/* <Button onClick={handleClose} autoFocus>
              Agree
            </Button> */}
          </DialogActions>
        </Dialog>

      </Grid >

    </>

  );
}
