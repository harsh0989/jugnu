import { Button, CardMedia, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import image from '../Assets/image.png'

const FOSLogin = () => {
    let navigate = useNavigate()
    const [field, setField] = useState(true)
    const [fos, setFos] = useState({ MISID: '', password: '' })
    const style = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
    const handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        setFos({ ...fos, [name]: value })
    }
    return (
        <>
            <Grid container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2% 0', height: '100vh' }}>
                <Grid item xs={12} sx={style}>
                    <Typography>FOS Login</Typography>
                </Grid>
                <Grid item xs={12} sx={style}>
                    <CardMedia component="img" src={image} sx={{ width: { md: '25%', sm: '40%', xs: '60%' }, height: 'auto' }} />
                </Grid>
                <Grid item xs={12} sx={style}>
                    {field ? <TextField onChange={handleChange} value={fos.MISID} placeholder='MIS ID' name="MISID" InputProps={{ style: { borderRadius: '10px' } }} sx={{ width: { md: '50%', sm: '70%', xs: '80%' }, boxShadow: '0px 0px 40px rgba(63, 61, 86, 0.25)', borderRadius: '10px' }}></TextField> : <TextField onChange={handleChange} name="password" value={fos.password} placeholder='Password' InputProps={{ style: { borderRadius: '10px' } }} sx={{ width: { md: '50%', sm: '70%', xs: '80%' }, boxShadow: '0px 0px 40px rgba(63, 61, 86, 0.25)', borderRadius: '10px' }} ></TextField>}
                </Grid>
                <Grid item md={field?6:12} xs={field?9.5:12} sm={field?8.5:12} sx={field?{display:'flex',alignItems:'center',justifyContent:'flex-end'}:{display:'flex',alignItems:'center',justifyContent:'space-evenly'}}>
                    {field ? '' : <Button sx={{ borderRadius: '10px', backgroundColor: '#3F3D56', color: 'white', width: { md: '10%' } }} onClick={() => { setField(true) }} >Previous</Button>}
                    {field ? <Button sx={{ borderRadius: '10px', backgroundColor: '#3F3D56', color: 'white', width: '10%' }} onClick={() => { setField(false) }}>Next</Button> : <Button sx={{ borderRadius: '10px', backgroundColor: '#3F3D56', color: 'white', width: '10%' }} onClick={() => { navigate("/user-details") }} >Login</Button>}
                </Grid>

            </Grid>
        </>
    )
}

export default FOSLogin