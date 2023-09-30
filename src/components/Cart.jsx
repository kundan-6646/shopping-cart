import Product from "./Product";

let Cart = ({products, removeProductToCart})=> {
    return (
        <div className="container">
            <h1>My Cart</h1>
            <div className="products">
                {products.map((prod) => {
                    return (<Product key={prod.id} data={prod} removeProductToCart={removeProductToCart} />)
                })}
            </div>
        </div>
    );
}

export default Cart;