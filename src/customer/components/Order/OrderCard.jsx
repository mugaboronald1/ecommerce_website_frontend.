import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';

const OrderCard = () => {
   const navigate=useNavigate();

  return (

    <div onClick={() => navigate(`/account/order/${5}`)} className='p-5 shadow-md shadow-black hover:shadow-2xl border'>
      <Grid container spacing={2} sx={{justifyContent:"space-between"}}>

        <Grid item xs={6}>
            <div className='flex cursor-pointer'>
                <img className="w-[5rem] h-[5rem] object-cover object-top" src='https://futurism.com/_next/image?url=https%3A%2F%2Fwp-assets.futurism.com%2F2024%2F05%2Felon-musk-fallout-tweet.jpg&w=2048&q=75' alt='' />

              <div className='ml-5 space-y-2'>
                <p className=''>Men Slim Mid Rise Black Jeans</p>
                <p className='opacity-50 text-xs font-semibold'>Size: M</p>
                <p className='opacity-50 text-xs font-semibold'>Color: Black</p>

              </div>

            </div>

        </Grid>
        <Grid item xs={2}>
            <p>rwf1099</p>
         </Grid>
         <Grid item xs={4}>
          { true && <div>
            <p>
            <AdjustIcon sx={{width:"15px", height:"15px"}} className='text-green-600
            mr-2 texts-sm'/>
                <span>
                    Delivered on May 26th
                </span>
            </p>
            <p className='text-xs'>
                Your Item Has been delivered
            </p>
            
            </div>}
          { false && <p>
                <span>
                    Expected Delivery on May 26
                </span>
            </p>}

         </Grid>



      </Grid>
    </div>
  )
}

export default OrderCard
