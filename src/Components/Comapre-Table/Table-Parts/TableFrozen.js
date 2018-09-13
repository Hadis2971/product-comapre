import React, {Component} from 'react';

class TableFrozen extends Component {
    render(){
        let arr = this.props.productsList.map(product => {
            if(product.condition === "Fresh"){
                return <td style={{backgroundColor:"#ff715b", color:"#FFF"}} key={product.id}>{product.condition}</td>
            }else{
                return <td style={{backgroundColor:"#48cfad", color:"#FFF"}} key={product.id}>{product.condition}</td>
            }
            
        });
        return arr;
    }
    
};

export default TableFrozen;