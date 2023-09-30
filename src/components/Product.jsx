
let Product = ({data, addProductToCart, removeProductToCart})=> {
    return (
        <div className="product">
            <img src={data.images[0]} alt={data.description} />
            <div className="product-info">
                <div className="product-info-item title">
                    {data.title}
                </div>
                <div className="product-info-item">
                    <span className="title">Price:</span> ${data.price}
                </div>
            </div>
            <button onClick={() => {
                addProductToCart ? addProductToCart(data) : removeProductToCart(data);
            }}>{addProductToCart ? "Add to cart" : "Remove from cart"}</button>
        </div>
    )
}

export default Product;