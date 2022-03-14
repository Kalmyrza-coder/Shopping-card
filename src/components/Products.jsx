import Product from './Product';
import { useContext } from 'react';
import { GeneralContext} from '../context/Context'
import { Grid } from '@mui/material'

function Products({data}) {
    const {allProducts} = useContext(GeneralContext)
    return(
        <><h1>Products</h1>
        <Grid container>
            {allProducts.map((pr) => {
                return(<Grid item xs={6}><Product data={pr} key={pr.id}/></Grid>)
            })}
        </Grid>
        </>
    )
}

export default Products;