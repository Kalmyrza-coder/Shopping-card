import {useContext } from 'react'
import { GeneralContext } from '../context/Context';
function Cart() {
    const {cart} = useContext(GeneralContext)
    return(<>
    <h1>Checkout</h1>
    {cart.map((element)=> {
        return(<p>{element.title}</p>)
    })}
    </>)
}

export default Cart;