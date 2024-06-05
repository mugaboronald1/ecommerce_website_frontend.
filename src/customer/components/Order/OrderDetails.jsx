import React from 'react'
import AdressCard from '../AdressCard/AdressCard'
import OrderTracker from './OrderTracker'
import { Box, Grid } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import StarBorderIcon from '@mui/icons-material/StarBorder';

const OrderDetails = () => {
  return (
    <div className='px:5 lg:px-20'>
        <div>
            <h1 className='font-bold text-xl py-7'>Delivery Adress</h1>
        <AdressCard/>
        </div>
        <div className='py-20'>
            <OrderTracker activestep={3}/>
        </div>
        <Grid className='space-y-5' container>


        {[1,1,1,1,1].map((item)=> <Grid item container className='shadow-xl rounded-md p-5 border' 
        sx={{alignItems:"center",justifyContent:"space-between"}}>
                   <Grid item xs={6}>
                    <div className='flex items-center space-x-4'>
                        <img className='w-[5rem] h-[5rem] object-cover object-top' src='data:image/jpeg;base64,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' 
                        alt=''/>

                    <div className='space-y-2 ml-5'>
                        <p className='font-semibold'>Men Slim Mid Rise Black Jeans</p>
                        <p className='space-x-5 opacity-50 text-xs font-semibold'><span>Color: pink </span><span>Size: M</span></p>
                        <p>Seller: Andrew tate</p>
                        <p>rwf1099</p>
                    </div>


                    </div>

                   </Grid>
                   <Grid item>
                        <Box sx={{color:deepPurple[500]}}>

                            < StarBorderIcon sx={{fontSize:"2rem"}}  className='px-2 '/>
                            <span>Rate & Review Product</span>

                        </Box>
                   </Grid>
            </Grid> )}



           

        </Grid>
   
    </div>
  )
}

export default OrderDetails
