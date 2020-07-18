import React from 'react'

class CartItem extends React.Component {
    render(){
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img alt="phone" style={Styles.image}/>
                </div>
                <div className="right-block">
                    <div style={ {fontSize:25} }>Phone</div>
                    <div style={ {fontSize:25} }>Rs 2199</div>
                    <div style={ {fontSize:25} }>Qty: 1</div>
                    <div className="cart-item-actions">

                    </div>
                </div>

            </div>
        );
    }
}

const Styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4
    }
}

export default CartItem;