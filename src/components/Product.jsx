import { useState } from 'react'
import { useEffect } from 'react'
import Card from '@mui/material/Card'
import { CardActions } from '@mui/material'
import { CardContent } from '@mui/material'
import { CardMedia } from '@mui/material'
import { Button } from '@mui/material'
import { Typography } from '@mui/material'
import { Grid } from '@mui/material'
import { TextField } from '@mui/material'

function Product({data}) {
    const {image,title,description, price} = data
    const [quantity, setQuantity] = useState(10)
    return(
        <><Card sx={{
            maxWidth: 345,
            mb: 5
        }}>
            <CardMedia 
            height='140'
            component="img"
            image={image}
            alt="green iguana"
            />
            <Typography gutterBottom variant="h5" component='div'>
                {title}
            </Typography>
            <Typography variant='body2' color="text.secondary">
                {description}
            </Typography>
            <Typography m={2} variant='h2' color="text">
                {price}
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={3}><Button variant="contained" onClick={() => setQuantity(prev => prev + 1)}>Add one</Button></Grid>

                <Grid item xs={3}><TextField disabled value={quantity}></TextField></Grid>

                <Grid item xs={3}><Button variant="contained" onClick={() => setQuantity(prev => prev - 1)}>Remove one</Button></Grid>

                <Grid item xs={3}>
                    <Button fullWidth onClick={() => console.log('doll')}>
                        order
                    </Button>
                </Grid>
            </Grid>
        </Card>
        </>
    )
}

export default Product;