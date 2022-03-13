import { useEffect, useState } from 'react'
import Cart from './components/Cart';
import Products from './components/Products';
import './App.css';
import axiosInstance from './helpers/Axios';
import { Grid } from "@mui/material"

function App() {
  const [allProducts, setAllProducts] = useState([])
  const [order, setOrder] = useState([])

  useEffect(() => {
    callApi()
  }, [])

  const callApi = async () => {
    const url = 'products/'
    const req = await axiosInstance.get(url)
    setAllProducts(req.data)
  }

  return (
  <div className='App'>
    <Grid container>
        <Grid item xs={8}>
          <Products data={allProducts} passToCart={order}/> 
        </Grid>
        <Grid item xs={2}>
          <Cart cart={order}/>
        </Grid>
    </Grid>
    
  </div>
  )
}

export default App;
