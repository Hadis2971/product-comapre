import React, { Component } from 'react';
import ProductImage from "../Product-Image/ProductImage";
import ProductInfo from "../Product-Info/ProductInfo";

import "./product-card.css";

const appData = {
    timesClicked: 0,
    shouldRemove: true
}

class ProductCard extends Component {

    

    constructor(props){
        super(props);
        this.state = {
            buttonText: "Compare",
            isHovered: false,
            isClicked: false,
            
        };
    };

    

    buttonClickHandler(evt){
        this.setState(prevState => ({
            buttonText: (prevState.buttonText === "Compare")? "Remove" : "Compare",
            isClicked: !this.state.isClicked
        }),function(){
            if(this.state.buttonText === "Remove"){
                appData.timesClicked++;
                if(appData.timesClicked > 4){
                    appData.timesClicked = 4;
                }
                appData.shouldRemove = false;
            }else{
                appData.timesClicked--;
                if(appData.timesClicked < 0){
                    appData.timesClicked = 0;
                }
                appData.shouldRemove = true;
            }
            
            this.props.showTableHandler(appData.timesClicked, this.props.name, appData.shouldRemove);
        });      
    };

    mouseEnterHandler(){
        this.setState({isHovered: true});
    };

    mouseLeaveHandler(){
        this.setState({isHovered: false});
    };

    render(){
        
        return(
            <div onMouseEnter={this.mouseEnterHandler.bind(this)}
            onMouseLeave={this.mouseLeaveHandler.bind(this)}  
            className="product-card">
                <button 
                onClick={this.buttonClickHandler.bind(this)} 
                className="btn-style">{this.state.buttonText}</button>
                <ProductImage
                isClicked={this.state.isClicked}
                isHovered={this.state.isHovered}
                image={this.props.image}/>
                <ProductInfo  
                productName={this.props.name}
                productPrice={this.props.price}/>
            </div>
        );
    }
}

export default ProductCard;