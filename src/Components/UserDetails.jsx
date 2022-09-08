import React, { useState } from 'react'
import { Button, Grid, TextField, Typography,Modal,Box } from '@mui/material'
import image from '../Assets/popper.png'
const UserDetails = () => {
    const [open, setOpen] = useState(false)
    const style = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    }

    const error = {
        color: 'red',
        marginLeft: '10px'
    }
    const Submitted = () => {
    }
    let [errors, setErrors] = useState({
        nameerror: '',
        emailerror: '',
        phoneerror: '',
        cityerror: ''
    });
    let [value, setValue] = useState({
        name: '',
        email: '',
        phone: '',
        cityname: ''
    });
    const modalstyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '30%',
        bgcolor: 'background.paper',
        borderRadius:'15px',
        boxShadow: 24,
        p: 4,
      };

    const handleChanges = (event) => {
        setValue({
            ...value, [event.target.name]: event.target.value,
        })
    }
    const blur = (e) => {
        let { name } = e.target
        console.log(name)
        validateField(name)
    }
    const validateField = (name) => {
        let isValid = false;

        if (name === "phone") isValid = validatePhone();
        else if (name === "email") isValid = validateEmailAddress();
        else if (name === "name") isValid = validateName();
        else if (name === "cityname") isValid = validateCityName();
        return isValid;
    }
    const validateName = () => {
        let nameerror = ''
        const valid = /^([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-]+)*/
        let name = value.name
        if (name.trim() === "") nameerror = "Name is required"
        else if (!valid.test(name)) nameerror = "Name is not valid"
        setErrors({
            ...errors, nameerror: nameerror,
        })
    }
    const validatePhone = () => {
        let phoneerror = ''
        const valid = /^(\+0?1\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/
        let phone = value.phone
        if (phone.trim() === "") phoneerror = "Phone Number is required"
        else if (!valid.test(phone)) phoneerror = "Phone Number is not valid"
        setErrors({
            ...errors, phoneerror: phoneerror,
        })
    }
    const validateEmailAddress = () => {
        let emailerror = ''
        const valid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$|^$/
        let email = value.email
        if (!valid.test(email)) emailerror = "Email address is not valid"
        setErrors({
            ...errors, emailerror: emailerror,
        })
    }
    const validateCityName = () => {
        let cityerror = ''
        const valid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$|^$/
        let cityname = value.cityname
        if (!valid.test(cityname)) cityerror = "City Name is invaild"
        setErrors({
            ...errors, cityerror: cityerror,
        })
    }
    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }


    return (

        <>
            <Grid container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>

                <Grid container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2% 0' }} rowSpacing={7}>
                    <Grid item xs={12} sx={style}>
                        <Typography>User Details</Typography>
                    </Grid>
                    <Grid item xs={12} sx={style}>
                        <TextField onChange={handleChanges} value={value.phone} onBlur={blur} placeholder='Phone Number*' name="phone" InputProps={{ style: { borderRadius: '10px' } }} sx={{ width: { md: '50%', sm: '70%', xs: '80%' }, boxShadow: '0px 0px 40px rgba(63, 61, 86, 0.25)', borderRadius: '10px' }}></TextField>
                        {errors.phoneerror ? <Typography sx={error}>{errors.phoneerror}</Typography> : ""}
                    </Grid>
                    <Grid item xs={12} sx={style}>
                        <TextField onChange={handleChanges} value={value.email} onBlur={blur} placeholder='Email ID' name="email" InputProps={{ style: { borderRadius: '10px' } }} sx={{ width: { md: '50%', sm: '70%', xs: '80%' }, boxShadow: '0px 0px 40px rgba(63, 61, 86, 0.25)', borderRadius: '10px' }}></TextField>
                        {errors.emailerror ? <Typography sx={error}>{errors.emailerror}</Typography> : ""}
                    </Grid>
                    <Grid item xs={12} sx={style}>
                        <TextField onChange={handleChanges} value={value.name} onBlur={blur} placeholder='Name*' name="name" InputProps={{ style: { borderRadius: '10px' } }} sx={{ width: { md: '50%', sm: '70%', xs: '80%' }, boxShadow: '0px 0px 40px rgba(63, 61, 86, 0.25)', borderRadius: '10px' }}></TextField>
                        {errors.nameerror ? <Typography sx={error}>{errors.nameerror}</Typography> : ""}
                    </Grid>
                    <Grid item xs={12} sx={style}>
                        <TextField onChange={handleChanges} value={value.cityname} onBlur={blur} placeholder='City Name' name="cityname" InputProps={{ style: { borderRadius: '10px' } }} sx={{ width: { md: '50%', sm: '70%', xs: '80%' }, boxShadow: '0px 0px 40px rgba(63, 61, 86, 0.25)', borderRadius: '10px' }}></TextField>
                        {errors.cityerror ? <Typography sx={error}>{errors.cityerror}</Typography> : ""}
                    </Grid>
                    <Grid item xs={8} sm={6} md={12} sx={style}>
                        <Button sx={{ backgroundColor: '#3F3D56', color: 'white', padding: { md: '1%', sm: '2%', xs: '4%', width: { md: '80%', sm: '90%', xs: '100%' } }, borderRadius: '10px' }} onClick={handleOpen}>Generate Download link</Button>
                    </Grid>
                </Grid>
            </Grid>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={modalstyle}>
                    <Typography sx={{ mt: 2,textAlign:'center',fontWeight:'bold',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}} variant="h5">
                        Thank you, a link has been generated and sent <img src={image} style={{width:'110px',height:'110px'}}/>
                    </Typography>
                </Box>
            </Modal>
        </>

    )
}

export default UserDetails
