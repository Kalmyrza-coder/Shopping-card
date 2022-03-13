import Product from './Product';
import { Grid } from '@mui/material'

function Products({data}) {
    return(
        <><h1>Products</h1>
        <Grid container>
            {data.map((pr) => {
                return(<Grid item xs={6}><Product data={pr} key={pr.id}/></Grid>)
            })}
        </Grid>
        </>
    )
}

export default Products;