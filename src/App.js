import { useState } from 'react';
import Cart from './components/Cart';
import Products from './components/Products';
import './App.css';
import axiosInstance from './helpers/Axios';
import { Grid } from "@mui/material"

function App() {
  
  const [order, setOrder] = useState([])

  return (
  <div className='App'>
    <Grid container>
        <Grid item xs={8}>
          <Products/> 
        </Grid>
        <Grid item xs={2}>
          <Cart cart={order}/>
        </Grid>
    </Grid>
    
  </div>
  )
}

export default App;
