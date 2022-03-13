import Product from './Product';

function Products({data}) {
    return(
        <><h1>Products</h1>
        {data.map((pr) => {
            return(<Product data={pr} key={pr.id}/>)
        })}
        </>
    )
}

export default Products;