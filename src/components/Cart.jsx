import Product from "./Product";

let Cart = ({products, removeProductToCart, checkout})=> {
    function getTotal() {
        let total = 0;
        products.forEach(element => {
            total += element.price;
        });

        return total;
    }


    return (
        <div className="container">
            <h1>My Cart</h1>
            <div className="my-cart">
                <div className="cart-products">
                    {products.map((prod) => {
                        return (<Product key={prod.id} data={prod} removeProductToCart={removeProductToCart} />)
                    })}
                </div>
                <div className="checkout-list">
                    <h4>Checkout List</h4>

                    <ul>
                        {products.map((prod) => {
                            return <li><span>{prod.title}</span> <span>${prod.price}</span></li>
                        })}
                        <li className="total-price"><span>Total</span> <span>${getTotal()}</span></li> 
                    </ul>
                    <button onClick={() => {
                        checkout([]);
                        alert('Thanks for shopping with us!')
                    }}>Click to checkout</button>
                </div>
            </div>
        </div>
    );
}

export default Cart;