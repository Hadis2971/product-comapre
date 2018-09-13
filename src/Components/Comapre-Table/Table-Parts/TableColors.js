import React, {Component} from 'react';
import "../table-styles/table-colors.css";

class TableColors extends React.Component {
    render(){
        let arr = this.props.productsList.map(product => {
            return <td style={{textAlign:"center"}} key={product.id}><p className="color-style" style={{backgroundColor: product.color}}></p></td>
        });
        return arr;
    }
    
};

export default TableColors;

