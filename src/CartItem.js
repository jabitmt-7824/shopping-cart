import React from 'react'

class CartItem extends React.Component {

    // increaseQunatity = () => {
    //     // setStatate() form 1
    //     // this.setState({
    //     //     qnty: this.state.qnty+1
    //     // });

    //     // setState() form 2
    //     this.setState((prevState) => {
    //         return {
    //             qnty: prevState.qnty + 1
    //         }
    //     })
    // }

    // decreaseQunatity = () => {
    //     const currentQnty = this.state.qnty;
    //     if (currentQnty === 1) {
    //         return;
    //     }
    //     this.setState((prevState) => {
    //         return {
    //             qnty: prevState.qnty - 1
    //         }
    //     })
    // }
    render() {
        const { title, price, qnty } = this.props.product;
        const { product, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct} = this.props;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={Styles.image} alt="phone" />
                </div>
                <div className="right-block">
                    <div style={{ fontSize: 25 }}>{title}</div>
                    <div style={{ fontSize: 15 }}>Rs {price}</div>
                    <div style={{ fontSize: 15 }}>Qty: {qnty}</div>
                    <div className="cart-item-actions">
                        <img
                            alt="incease-button"
                            className="action-icons"
                            src="https://image.flaticon.com/icons/svg/992/992651.svg"
                            onClick= {()=>{
                                // this.props.onIncreaseQuantity(this.props.product)
                                onIncreaseQuantity(product)
                                }} 
                            />
                        <img
                            alt="decrease-button"
                            className="action-icons"
                            src="https://image.flaticon.com/icons/svg/992/992683.svg"
                            onClick={()=>{
                                // this.props.onDecreaseQuantity(this.props.product)
                                onDecreaseQuantity(product)
                            } 
                            }/>
                        <img
                            alt="delete-button"
                            className="action-icons"
                            src="https://image.flaticon.com/icons/svg/3096/3096673.svg" 
                            onClick = {()=>{
                                // this.props.onDeleteProduct(this.props.product.id)
                                onDeleteProduct(product.id)
                            }}
                            />
                    </div>
                </div>

            </div>
        );
    }
}

const Styles = {
    image: {
        height: 140,
        width: 150,
        borderRadius: 4,
        // backgroundColor: "#ccc"
    }
}

export default CartItem;