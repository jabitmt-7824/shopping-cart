import React from 'react'
import CartItem from './CartItem'

const Cart = (props) => {
    // const { products } = props.product;
    return (
        <div className="cart">
            {props.product.map((prdct) => {
                return (
                    <CartItem
                        product={prdct}
                        key={prdct.id}
                        onIncreaseQuantity={props.onIncreaseQuantity}
                        onDecreaseQuantity={props.onDecreaseQuantity}
                        onDeleteProduct={props.onDeleteProduct}
                    />
                );
            })}
        </div>
    );
}

export default Cart;