import React, { Component } from 'react';
import "./product-image.css";

class ProductImage extends Component {
    render(){

        const imageOverlay = {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "75%",
            borderRadius: "0.3em 0.3em 0em 0em",
            zIndex: 1,
            
        }

        if(this.props.isClicked){
            imageOverlay.backgroundColor = "rgba(72, 207, 173, 0.7)";
        }else{imageOverlay.backgroundColor = "transparent";}

        if(this.props.isHovered){
            imageOverlay.backgroundColor = "rgba(72, 207, 173, 0.7)";
        }

        

        return(
            <div className="image-box">
            <div style={imageOverlay}></div>
                <img className="image-style"
                alt="Product" 
                src={require("../../images/" + this.props.image)} />
            </div>
        );
    }
    
};

export default ProductImage;