import React from 'react';
import Cart from './Cart';
import NavBar from './NavBar';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          title: "Laptop",
          price: 20999,
          qnty: 2,
          cartImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQqfzLmC4Rg0UE_nfCHAW3plVHctLmNjKLhtA&usqp=CAU",
          id: 1
        },
        {
          title: "Watch",
          price: 999,
          qnty: 4,
          cartImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQWQ81tUYr0Nh9_dl3ujH_ltGP-2x0m6N900g&usqp=CAU",
          id: 2
        },
        {
          title: "Mobile Phone",
          price: 9999,
          qnty: 1,
          cartImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_6mZjk-CkCp1LMFXc7QrFHyjM9arATF98Ow&usqp=CAU",
          id: 3
        }
      ]
    }
  }


  handleIncreaseQuantity = (product) => {
    console.log("increase Quantity of", product);
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qnty += 1;
    this.setState({
      // shorthand for products:products
      products
    });
  }

  handleDecreaseQuantity = (product) => {
    console.log("increase Quantity of", product);
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qnty === 1) {
      return;
    }
    products[index].qnty -= 1;
    this.setState({
      // shorthand for products:products
      products
    });
  }

  handleDeleteProduct = (id) => {
    const { products } = this.state;
    const items = products.filter((item) => item.id !== id);
    this.setState({
      products: items
    });
  }

  getCartCount = () => {
    let count = 0;
    const { products } = this.state;
    products.forEach((product) => {
      count += product.qnty;
    })
    return count;
  }

  getCartTotalPrice = () =>{
    let total = 0;
    const { products } = this.state;
    products.forEach((product)=>{
      total += product.qnty * product.price;
    })
    return total;
  }

  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <NavBar counts={this.getCartCount} />
        <Cart
          product={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        <div style={ { fontSize:'2rem', marginTop: 50} }>TOTAL PRICE: {this.getCartTotalPrice()}</div>
      </div>
     
    );
  }
}

export default App;
