import React from 'react';
import Cart from './Cart';
import NavBar from './NavBar';
import * as firebase from 'firebase';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading: true
    };
    this.db = firebase.firestore();
  }
 
  componentDidMount() {
    // firebase
    //   .firestore()
    //   .collection("products")
    //   .get()
    //   .then(snapshot => {
    //     const products = snapshot.docs.map(doc => {
    //       const data = doc.data();
    //       data["id"] = doc.id;
    //       return data;
    //     });
    //     this.setState({ products: products, loading: false });
    //   });

    this.db
      .collection("products")
      .onSnapshot(snapshot => {
        const products = snapshot.docs.map(doc => {
          const data = doc.data();
          data["id"] = doc.id;
          return data;
        });
        this.setState({ products: products, loading: false });
      });
  }

  handleIncreaseQuantity = (product) => {
    console.log("increase Quantity of", product);
    const { products } = this.state;
    const index = products.indexOf(product);
    // products[index].qnty += 1;
    // this.setState({
    //   // shorthand for products:products
    //   products
    // });
    const docRef = this.db.collection('products').doc(products[index].id);
    docRef.update({
      qnty: products[index].qnty += 1
    })
    .then(() => {
      console.log("updated successfully");
    })
    .catch(error => {
      console.log("error in updating product", error);
    });
  }

  handleDecreaseQuantity = (product) => {
    console.log("increase Quantity of", product);
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qnty === 1) {
      return;
    }
    // products[index].qnty -= 1;
    // this.setState({
    //   // shorthand for products:products
    //   products
    // });
    const docRef = this.db.collection('products').doc(products[index].id);
    docRef.update({
      qnty: products[index].qnty -= 1
    })
    .then(() => {
      console.log("updated successfully");
    })
    .catch(error => {
      console.log("error in updating product", error);
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

  addProduct = () =>{
    this.db
    .collection('products')
    .add({
      img:"",
      title: "Washing Machine",
      price: 8000,
      qnty: 2
    })
    .then(docRef =>{
      console.log("product added", docRef);
    })
    .catch(error =>{
      console.log("error in addding  products", error);
    });
  }

  render() {
    const { products,loading } = this.state;
    return (
      <div className="App">
        <NavBar counts={this.getCartCount} />
        <button style={{ padding:20, margin:20 }} onClick={this.addProduct}>Add Product</button>
        <Cart
          product={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        {loading && <h1>Loading...</h1>}
        <div style={ { fontSize:'2rem', marginTop: 50} }>TOTAL PRICE: {this.getCartTotalPrice()}</div>
      </div>
     
    );
  }
}

export default App;
