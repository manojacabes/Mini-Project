import React from "react";
import "./../assets/style/MainPage.css";
import ProBookLogo from './../assets/images/ProBook.png'
import { Typography, Grid } from "@mui/material";
import MUIDataTable from "mui-datatables";

function History() {
    const [data, setData] = React.useState();
    const fetchData = async () => {
        const response = await fetch(
            "http://localhost:8095/profile-management/v1/email/history"
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
    }, []);
    console.log(data, 'data')
    const columns = [
        {
            name: 'from',
            label: 'FROM'

        },
        {
            name: 'to',
            label: 'TO'

        },
        {
            name: 'subject',
            label: 'SUBJECT'

        },
        {
            name: 'body',
            label: 'BODY'

        },
        {
            name: 'createdOn',
            label: 'CREATED ON'

        }
    ]
    return (
        <div >
            <Grid style={{ width: '100%', backgroundColor: 'grey' }}>
                <MUIDataTable
                    title={'PROBOOK INIVITATION HISTORY'}
                    data={data}
                    columns={columns}
                >

                </MUIDataTable>
            </Grid>

        </div>
    )
}


export default History;