import Product from "./Product";

let Home = ({products, addProductToCart})=> {
    return (
        <div className="container">
            <h1>All Items</h1>
            <div className="products">
                {products.map((prod) => {
                    return (<Product key={prod.id} data={prod} addProductToCart={addProductToCart} />)
                })}
            </div>
        </div>
    );
}

export default Home;