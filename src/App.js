import React, { Component } from 'react';
import ProductCard from "./Components/Product-Card/ProductCard";
import ComapreTable from "./Components/Comapre-Table/ComapreTable";
import './App.css';


const productsList = [
  {
    name: "Ananas",
    price: "$3.99",
    image: "anans.png",
    condition: "Fresh",
    color: "#ff8533",
    id: "ans_prod"
  },
  {
    name: "Strawberry",
    price: "$2.99",
    image: "strawberry.png",
    condition: "Frozen",
    color: "#ff3333",
    id: "strb_prod"
  },
  {
    name: "Mango",
    price: "$4.99",
    image: "mango.png",
    condition: "Fresh",
    color: "#ff1400",
    id: "mng_prod"
  },
  {
    name: "Cherry",
    price: "$1.99",
    image: "cherry.png",
    condition: "Frozen",
    color: "#ff3333",
    id: "chr_prod"
  },
];

const productNames = [];


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      showTable: false

    }
  }

  showTableHandler = (num, name, shouldRemove) => {
    if(num >= 2){
      this.setState({showTable: true});
    }else{
      this.setState({showTable: false});
    }
    if(productNames.indexOf(name) === -1 && !shouldRemove){
      productNames.push(name);
    }else{
      productNames.splice(productNames.indexOf(name), 1);
    }
    console.log(productNames);
  };

  render() {

    let tableContent = [];

    const productCards = productsList.map((product) => {
      return <ProductCard
      showTableHandler={this.showTableHandler}
      key={product.id}
      image={product.image} 
      name={product.name} 
      price={product.price} />
    });

    if(this.state.showTable){
      let i;
      for(i = 0; i < productNames.length; i++){
        switch(productNames[i]){
          case("Ananas"): tableContent.push(productsList[0]);break;
          case("Strawberry"): tableContent.push(productsList[1]);break;
          case("Mango"): tableContent.push(productsList[2]);break;
          case("Cherry"): tableContent.push(productsList[3]);break;
        }
      }
    }

    const table = (this.state.showTable)? <ComapreTable productsList={tableContent}/> : null;

    return (
      <div className="App">
        <h1 id="header-text">Compare Products</h1>
        <div id="products-container">
          {productCards}
        </div>
        {table}
      </div>
    );
  }
}

export default App;
