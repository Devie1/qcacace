// Libraries
import { Box, Grid, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

// Assets
import Banner from 'assets/images/banner.png';

// Custom styles
const subtitle = {
    color: '#7e7b44',
    transition: 'all 0.2s ease-in-out',
    fontSize: {
        xs: '135%',
        md: '190%'
    },
    fontWeight: 'bold'
}

const title = {
    color: '#d0915c',
    fontFamily: 'Tommy Bolder',
    lineHeight: 1,
    transition: 'all 0.2s ease-in-out',
    fontSize: {
        xs: '300%',
        md: '350%'
    }
}

const link = {
    textDecoration: 'none',
    backgroundColor: '#371313',
    color: '#f5f6fa',
    padding: {
        xs: '6px 17px',
        md: '8px 20px'
    },
    borderRadius: '7px',
    transition: 'all 0.2s ease-in-out',
    '&:hover': { backgroundColor: '#311717' }
}

const Index = () => {
    return (
        <Grid container direction= "row" justifyContent= "space-evenly" alignItems= "stretch" spacing= { 2 }>
            <Grid item xs= { 12 } sm= { 5 } md= { 4 }>
                <Stack direction= "column" justifyContent= "center" alignItems= "stretch" sx= {{ height: '100%' }}>
                    <Typography sx= { subtitle }>Animals are our Friends</Typography>
                    <Typography sx= { title }>Give our Pets a Better Home</Typography>
                    <Box display= "flex" flexDirection= "row" justifyContent= "flex-start" alignItems= "center" sx= {{ marginTop: '30px' }}><Typography component= { Link } to= "/pets" sx= { link }>Find your Pets</Typography></Box>
                </Stack>
            </Grid>
            <Grid item xs= { 12 } sm= { 7 } md= { 8 }><img src= { Banner } alt= "banner" style= {{ width: '100%', height: 'auto', borderRadius: '10px' }} /></Grid>
        </Grid>
    );
}

export default Index;