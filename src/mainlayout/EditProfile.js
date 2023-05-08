import { Typography, TextField, Grid, Button } from "@mui/material";
import React from "react";

const Edit = (props) => {
    const { Details, onClose } = props;
    const [datas, setDatas] = React.useState({
        email: Details[5],
        firstname: Details[0],
        lastname: Details[1],
        batch: Details[2],
        department: Details[3],
        mobNo: Details[4],
        occupation: Details[6],
        linkedInUrl: Details[8],
        linkedInProfile: Details[7]
    })
    console.log(Details, 'details')
    const handleChange = (e) => {
        console.log(e, 'e')
        setDatas({ ...datas, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();


        try {
            const response = await fetch(`http://localhost:8095/profile-management/v1/profile?batch=${datas?.batch}&department=${datas?.department}&emailId=${datas.email}&firstname=${datas?.firstname}&lastname=${datas?.lastname}&linkedInProfileUrl=${datas?.linkedInProfile}&linkedInUrl=${datas?.linkedInUrl}&mobileNo=${datas?.mobNo}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                // body: JSON.stringify(data),
            });

            if (response.ok) {
                console.log('PUT request successful');
                onClose();
            } else {
                // Request failed
                console.error('POST request failed');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    return (
        <Grid style={{
            width: '50%', height: '50%'
        }}>
            <TextField
                type="text"
                label="firstname"
                name="firstname"
                value={datas?.firstname}
                onChange={handleChange}

            />
            <TextField
                type="text"
                label="lastname"
                name="lastname"

                value={datas?.lastname}
                onChange={handleChange}

            />
            <TextField
                type="email"
                label="Email"
                name="email"

                value={datas?.email}
                onChange={handleChange}

            />
            <TextField
                type="text"
                label="batch"
                name="batch"

                value={datas?.batch}
                onChange={handleChange}

            />
            <TextField
                type="text"
                label="department"
                name="department"

                value={datas?.department}
                onChange={handleChange}
            />
            <TextField
                type="text"
                label="occupation"
                name="occupation"

                value={datas?.occupation}
                onChange={handleChange}

            />
            <TextField
                type="text"
                label="mobNo"
                name="mobNo"

                value={datas?.mobNo}
                onChange={handleChange}

            />
            <TextField
                type="text"
                label="linkedInUrl"
                name="linkedInUrl"

                value={datas?.linkedInUrl}
                onChange={handleChange}

            />
            <TextField
                type="text"
                label="linkedInProfile"
                name="linkedInProfile"

                value={datas?.linkedInProfile}
                onChange={handleChange}

            />
            <Button
                onClick={handleSubmit}
            >
                SUBMIT
            </Button>
        </Grid>
    )
}
export default Edit;