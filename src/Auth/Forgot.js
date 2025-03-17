import React from "react";
import { Box, Button, TextField } from "@mui/material"

const Forgot = () => {
    return (
        <>
            <Box
                component="form"
                sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
                noValidate
                autoComplete="off" className="register">

                <Box className="header_title">Forgot</Box>

                <Box className="Forgot">

                    <TextField
                        type="email"
                        required
                        id="email"
                        variant="standard"
                        label="Enter Email Id"
                    />

                    <TextField
                        type="OTP"
                        required
                        variant="standard"
                        id="OTP"
                        label="Enter OTP"
                    />

                    <Button className="primary_button">Submit</Button>


                </Box>

            </Box>
        </>
    )
}

export default Forgot;