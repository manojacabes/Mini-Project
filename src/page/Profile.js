import React from "react";
import "./../assets/style/MainPage.css";
import ProBookLogo from './../assets/images/ProBook.png'
import { Typography, Grid, Button, Dialog, DialogContent, useDialog, DialogContentText, DialogActions, useTheme, useMediaQuery, DialogTitle } from "@mui/material";
import MUIDataTable from "mui-datatables";
import { Edit, Delete } from "@mui/icons-material";
import EditProfile from '../mainlayout/EditProfile'
function History() {
  const [data, setData] = React.useState();
  const [overlay, setOverlay] = React.useState(false);
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [details, setDetails] = React.useState([])
  const [changed, setChanged] = React.useState(0)
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
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
  React.useEffect(() => {
    fetchData()
      .then((res) => {
        setData(res);
      })
      .catch((e) => {
        console.log(e.message);
      });
    // setChanged(changed)
  }, []);
  const handleClose = () => {
    setDialogOpen(false)
  }

  const deleteButton = async (user) => {
    console.log(user[5], 'user12')
    try {
      const response = await fetch(`http://localhost:8095/profile-management/v1/profile?emailId=${user[5]}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        // body: JSON.stringify(data),
      });

      if (response.ok) {
        // Successful request
        console.log('POST request successful');
      } else {
        // Request failed
        console.error('POST request failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const columns = [
    {
      name: 'firstname',
      label: 'First Name'

    },
    {
      name: 'lastname',
      label: 'Last Name'

    },
    {
      name: 'batch',
      label: 'Batch'

    },
    {
      name: 'department',
      label: 'DepartMent'

    },
    {
      name: 'mobileNo',
      label: 'Mobile No'

    },
    {
      name: 'emailId',
      label: 'Email Id'

    },
    {
      name: 'currentOccupation',
      label: 'Current Occupation'
    },
    {
      name: 'linkedInProfileUrl',
      label: 'linkedInProfileUrl ',
      options: {
        viewColumns: true,
        display: false
      }
    },
    {
      name: 'linkedInUrl',
      label: 'linkedInUrl ',
      options: {
        viewColumns: true,
        display: false
      }
    },
    {
      name: '',
      label: '',
      options: {
        filter: true,
        sort: false,
        display: true,
        customBodyRender: (value, table) => {
          return (
            <>
              <Grid style={{ display: 'flex' }}>
                <Grid onClick={() => {
                  setDetails(table.tableData[table.rowIndex]);
                  setOverlay('EDIT')
                }}
                >
                  <Edit /><br />

                </Grid>
                <Grid onClick={() => {
                  deleteButton(table.tableData[table.rowIndex]);
                  // setOverlay('EDIT')
                }}
                >
                  <Delete />

                </Grid>
              </Grid>


            </>
          );
        }
      }
    }
  ]
  const options = {
    viewColumns: true
  }
  return (
    <div >
      <Grid style={{ width: '100%', backgroundColor: 'grey' }}>
        <MUIDataTable
          title={'PROFILE'}
          data={data}
          columns={columns}
          options={options}
        >

        </MUIDataTable>
      </Grid>
      <Dialog
        fullScreen={fullScreen}
        open={overlay}
        // value={profile}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          Edit Profile
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {overlay === 'EDIT' && <EditProfile Details={details} setDetails={setDetails} onClose={() => { setOverlay(false) }} />}
            {/* {overlay === 'EDIT' && <EditProfile />} */}

          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => { setOverlay(false) }}>
            cancel
          </Button>
          {/* <Button onClick={handleClose} autoFocus>
              Agree
            </Button> */}
        </DialogActions>
      </Dialog>

    </div>
  )
}


export default History;