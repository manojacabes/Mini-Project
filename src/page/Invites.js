import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import {
    TextField,
    Button,
    Typography,
    Container,
    Grid
} from '@mui/material';

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: 40,
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
    },
    submitButton: {
        margin: '10px 24px 24px 203px',
        width: '130px',
        backgroundColor: '#581845',
        '&:hover': {
            backgroundColor: '#b698adc2',
        },
    },
    fonts: {
        fontSize: '20px',
        fontFamily: 'cursive',
        fontWeight: 700,
        margin: '10px 10px 10px 10px'
    }
}));

function SignInForm() {
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [subject, setSubject] = useState('');
    const [batch, setBatch] = useState('');
    const [batchMessage, setBatchMessage] = useState('');
    const [batchSubject, setBatchSubject] = useState('');

    const fetchData = async () => {
        const response = await fetch(
            "http://localhost:8095/profile-management/v1/email/sende"
        );
        if (!response.ok) {
            throw new Error("Data could not be fetched!");
        } else {
            return response.json();
        }
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Perform sign-in logic here
    //     console.log('Email:', email);
    //     console.log('message:', message);
    //     console.log('subject:', subject);

    // };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            emailId: email,
            requestBody: message,
            subject: subject
        };

        try {
            const response = await fetch(`http://localhost:8095/profile-management/v1/email/send?emailId=${email}&requestBody=${message}&subject=${subject}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                // body: JSON.stringify(data),
            });

            if (response.ok) {
                // Successful request
                console.log('POST request successful');
                // Reset form fields
                setMessage('');
                setEmail('');
                setSubject('')
            } else {
                // Request failed
                console.error('POST request failed');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    const handleSubmitBatch = async (e) => {
        e.preventDefault();


        try {
            const response = await fetch(`http://localhost:8095/profile-management/v1/email/send/all?batch=${batch}&requestBody=${batchMessage}&subject=${batchSubject}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                // body: JSON.stringify(data),
            });

            if (response.ok) {
                // Successful request
                console.log('POST request successful');
                // Reset form fields
                setBatchMessage('');
                setBatch('');
                setBatchSubject('')
            } else {
                // Request failed
                console.error('POST request failed');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <Grid style={{ display: 'flex', background: '#67646424', height: '32rem', borderRadius: '15px' }}>
                <Container maxWidth="sm" className={classes.container}>
                    <Typography variant="h4" align="center" className={classes.fonts}>
                        Send Invitation for Individual
                    </Typography>
                    <form onSubmit={handleSubmit} className={classes.form}>
                        <TextField
                            label="Email"
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            label="subject"
                            type="subject"
                            required
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                        />
                        <TextField
                            label="message"
                            type="message"
                            required
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />


                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            className={classes.submitButton}
                        >
                            Send Email
                        </Button>
                    </form>
                </Container>
                <Container maxWidth="sm" className={classes.container}>
                    <Typography variant="h4" align="center" className={classes.fonts}>
                        Send Invitation for Batch
                    </Typography>
                    <form onSubmit={handleSubmitBatch} className={classes.form}>
                        <TextField
                            label="Batch"
                            type="text"
                            required
                            value={batch}
                            onChange={(e) => setBatch(e.target.value)}
                        />
                        <TextField
                            label="subject"
                            type="subject"
                            required
                            value={batchSubject}
                            onChange={(e) => setBatchSubject(e.target.value)}
                        />
                        <TextField
                            label="message"
                            type="message"
                            required
                            value={batchMessage}
                            onChange={(e) => setBatchMessage(e.target.value)}
                        />


                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            className={classes.submitButton}
                        >
                            Send Email
                        </Button>
                    </form>
                </Container>
            </Grid>

        </div>

    );
}

export default SignInForm;
