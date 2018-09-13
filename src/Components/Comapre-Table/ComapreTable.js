import React from 'react';
import TableHead from "./Table-Parts/TableHead";
import TablePrices from "./Table-Parts/TablePrices";
import TableFrozen from "./Table-Parts/TableFrozen";
import TableColors from "./Table-Parts/TableColors";

import "./table-styles/comapre-table.css";

const ComapreTable = (props) => {

    return(
        <table id="compare-table">
           <thead>
               
                <tr id="head-row">
                    <td></td>
                    <TableHead productsList={props.productsList}/>
                </tr>
           </thead>
           <tbody>
               <tr>
                   <td className="bg-transparent">Price</td>
                   <TablePrices productsList={props.productsList}/>
               </tr>
               <tr>
                   <td className="bg-transparent">Colors</td>
                   <TableColors productsList={props.productsList}/>
               </tr>
               <tr>
                   <td className="bg-transparent">Condition</td>
                   <TableFrozen productsList={props.productsList}/>
               </tr>
           </tbody>            
        </table>
    );
};

export default ComapreTable;