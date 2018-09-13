import React from 'react';

const TableHead = (props) => {
    let arr = props.productsList.map(product => {
        return <th key={product.id}>{product.name}</th>
    });
    return arr;
};

export default TableHead;