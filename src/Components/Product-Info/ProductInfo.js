import React from "react";
import "./product-info.css";

const ProductInfo = (props) => {
    return(
        <div className="product-info-box">
            <p className="name">{props.productName}</p>
            <p className="price">{props.productPrice}</p>
        </div>
    );
};

export default ProductInfo;