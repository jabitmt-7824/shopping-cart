import React from 'react'

class CartItem extends React.Component {
    constructor(){
        super();
        this.state={
            title: "Mobile Phone",
            price: 999,
            qnty: 1,
            img: ""
        }
    }
    render(){
        const {title, price, qnty} = this.state;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={Styles.image} alt="phone"/>
                </div>
                <div className="right-block">
                    <div style={ {fontSize:25} }>{title}</div>
                    <div style={ {fontSize:15} }>Rs {price}</div>
                    <div style={ {fontSize:15} }>Qty: {qnty}</div>
                    <div className="cart-item-actions">
                        <img alt="incease-button" className="action-icons" src="https://image.flaticon.com/icons/svg/992/992651.svg" />
                        <img alt="decrease-button" className="action-icons" src="https://image.flaticon.com/icons/svg/992/992683.svg"/>
                        <img alt="delete-button" className="action-icons" src="https://image.flaticon.com/icons/svg/3096/3096673.svg"/>
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