import React from 'react'
import CartItem from './CartItem'

class Cart extends React.Component {
    constructor() {
        super();
        this.state = {
            products: [
                {
                    title: "Laptop",
                    price: 20999,
                    qnty: 2,
                    img: "",
                    id: 1
                },
                {
                    title: "Watch",
                    price: 999,
                    qnty: 4,
                    img: "",
                    id:2
                },
                {
                    title: "Mobile Phone",
                    price: 9999,
                    qnty: 1,
                    img: "",
                    id:3
                }
            ]
        }
    }

    handleIncreaseQuantity = (product)=>{
        console.log("increase Quantity of", product);
        const {products} = this.state;
        const index = products.indexOf(product);
        products[index].qnty +=1;
        this.setState({
            // shorthand for products:products
            products 
        });
    }

    handleDecreaseQuantity = (product)=>{
        console.log("increase Quantity of", product);
        const {products} = this.state;
        const index = products.indexOf(product);
        if(products[index].qnty === 1){
            return;
        }
        products[index].qnty -=1;
        this.setState({
            // shorthand for products:products
            products 
        });
    }

    handleDeleteProduct = (id)=>{
        const {products} = this.state;
        const items = products.filter((item)=> item.id !== id );
        this.setState({
            products: items
        });
    }

    render() {
        const { products } = this.state;
        return (
            <div className="cart">
                {products.map((prdct) => {
                    return (
                        <CartItem 
                        product = {prdct}
                        key = {prdct.id}
                        onIncreaseQuantity = {this.handleIncreaseQuantity}
                        onDecreaseQuantity = {this.handleDecreaseQuantity}
                        onDeleteProduct = {this.handleDeleteProduct}
                        />
                    )
                })}
            </div>
        );
    }
}

export default Cart;