import React, { useState, useEffect } from "react";
import "./../assets/style/Allprofiles.css";
import { Grid, Typography, Button, Slider } from "@mui/material";
import { useAccess } from "react-access-control";
import { makeStyles } from '@mui/styles'
import Headers from '../mainlayout/Header'
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

export default function HomePage() {
    const [profile, setProfile] = React.useState([]);
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
    return (
        <>

            
            <Grid className={classes.head}>
                <div className="Home">
                    <div className="row">
                        {profile.map((item) => {
                            return (
                                <div
                                    className="col-lg-3 col-md-4 col-sm-6 mb-3 cardShadow"
                                    key={item.emailId}
                                >
                                    <div className="card h-100">
                                        <div className="img-block">
                                            <img
                                                src={item.linkedInProfileUrl}
                                                className="card-img-top"
                                                alt={item.firstname}
                                                style={{ width: 200, height: 200, borderRadius: 200 / 2 }}
                                            />
                                            <br></br>
                                            <img
                                                src={item.latestCompanyDetails.logo_url}
                                                className="card-img-top"
                                                alt={" "}
                                                style={{
                                                    width: 50,
                                                    height: 50,
                                                    borderRadius: 50 / 2,
                                                    marginLeft: 150,
                                                    marginTop: -70,
                                                    border: 2,
                                                }}
                                            />
                                        </div>
                                        <div className="card-body  text-center">
                                            <h5 className="card-title">{item.firstname}</h5>
                                        </div>
                                        <ul className="list-group list-group-flush text-center">
                                            <li className="list-group-item">
                                                <br></br>
                                                {item.department}
                                            </li>
                                            <li className="list-group-item">
                                                <br></br>
                                                {item.batch}
                                            </li>
                                            <li className="list-group-item">
                                                <br></br>
                                                {item.latestCompanyDetails.company}
                                            </li>
                                        </ul>
                                        <br></br>
                                        <br></br>
                                        <div className="card-body" style={{ borderRadius: 20 }}>
                                            <div className="d-grid text-right">
                                                <a className="btn btn-dark" href="{}" target="_blank">
                                                    View More
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Grid>
        </>
    );
}
