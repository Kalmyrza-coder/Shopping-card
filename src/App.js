import { useEffect, useState } from 'react'
import Cart from './components/Cart';
import Products from './components/Products';
import './App.css';
import axiosInstance from './helpers/Axios';

function App() {
  const [allProducts, setAllProducts] = useState([])

  useEffect(() => {
    callApi()
  }, [])

  const callApi = async () => {
    const url = 'products/'
    const req = await axiosInstance.get(url)
    setAllProducts(req.data)
  }

  return (
  <>
    <Products data={allProducts}/>
    <Cart/>
  </>
  )
}

export default App;
