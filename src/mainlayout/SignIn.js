import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import signInImage from './../assets/images/5172658123.jpg'
import { Container, Typography, Grid, TextField, Button } from '@mui/material';


const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '44.6rem',
        width: '100%',
        // background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    },
    input: {
        color: 'white',
    },
    image: {
        backgroundImage: `url(${signInImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        // height: '89.1rem'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        padding: 40,
        borderRadius: 20,
        backgroundColor: '#8d8d8d3b',
        height: '20rem',
        width: '32rem',
        // margin: '281px 99px 122px 85px'
    },
    title: {
        margin: '-24px 19px 31px 172px',
        fontFamily: 'cursive',
        fontSize: '20px',

    },
    input: {
        marginBottom: 2,
        color: 'white'
    },
    submitButton: {
        // marginTop: 2,
        backgroundColor: '#c02f7e',
        // color: 'white',
        // '&:hover': {
        //     backgroundColor: 'grey',
        // },
    },
}));

const SignInForm = () => {
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    // React.useEffect(() => {
    //     // Check if the user is already logged in
    //     // const isLoggedIn = /* Add your login check logic here */;

    //     // if (isLoggedIn) {
    //     navigate('/home', { replace: true }); // Redirect to the dashboard or any other page
    //     // }
    // }, [navigate]);
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Perform sign-in logic

        console.log('Sign-in submitted:', email, password);

        try {
            const response = await fetch(`http://localhost:8095/profile-management/v1/user/signIn?password=${password}&userName=${email}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                // body: JSON.stringify(data),
            });

            if (response.ok) {
                // Successful request
                console.log('POST request successful');
                navigate('/home', { replace: false })

                // Reset form fields
                setPassword('');
                setEmail('');
            } else {
                // Request failed
                console.error('POST request failed');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className={classes.image} >
            <Grid className={classes.container} >
                <Grid >
                    <form className={classes.form} onSubmit={handleSubmit}>
                        <Typography variant="h5" component="h2" style={{
                            margin: '-24px 19px 31px 172px',
                            fontFamily: 'cursive',
                            fontSize: '20px',
                            color: 'white'
                        }}>
                            Sign In
                        </Typography>
                        <Grid spacing={4} xs={2} sm={4}>
                            <TextField
                                fullWidth
                                // id="standard-basic"
                                label="Email"
                                // type='email'
                                variant="standard"
                                value={email}
                                color='warning'
                                // InputProps={{
                                //     style: classes.input,
                                // }}
                                focused
                                style={{ margin: '10px 10px 10px 10px' }}
                                onChange={(e) => setEmail(e.target.value)} />

                        </Grid>
                        <Grid>
                            <TextField

                                label="Password"
                                type='password'
                                variant="standard"
                                value={password}
                                fullWidth
                                color='warning'
                                focused
                                InputProps={{
                                    classes: {
                                        color: 'white',
                                    },
                                }}
                                style={{ margin: '10px 10px 10px 10px' }}
                                // className={classes.input}
                                onChange={(e) => setPassword(e.target.value)} />

                        </Grid>

                        <Button
                            type="submit"
                            variant="contained"
                            style={{ backgroundColor: '#cb267a', width: '19rem', margin: '10px 10px 10px 58px' }}
                        >
                            Sign In
                        </Button>
                    </form>
                </Grid>
            </Grid>
        </div>


    );
};

export default SignInForm;

