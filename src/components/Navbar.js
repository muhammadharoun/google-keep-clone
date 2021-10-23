import React from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2, 
    padding: theme.spacing(1),
    textAlign: 'left',
    alignItems:'center',
    display:'flex',
    color: theme.palette.text.secondary,
  }));
function Navbar() {
    return (
        <Grid item xs={12}>
              <Item>
                <img src={'https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png'}
                srcSet={'https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png'}
                alt={'logo'}
                loading="lazy"/>
                <Typography variant="h6" component="h6" nowrap={true}>
            Keep
                </Typography> 
            </Item>
        </Grid>
    )
}

export default Navbar
