import React from 'react';

const TablePrices = (props) => {
    let arr = props.productsList.map(product => {
        return <td key={product.id}>{product.price}</td>
    });
    return arr;
};

export default TablePrices;

