import React from 'react';

import Row from './Row'

const taskListTable = (props) => {
    const rows = props.rows.map(row=>{
        const rowArr=[];
        for (const key in row) {
                const element = row[key];
                rowArr.push(element);
        }
        return <Row content = {rowArr}/>
    });
    const headerRow = props.headerRow.map(colName=>(<th>{colName}</th>))
    return (
        <table>
            {headerRow}
            {rows}
        </table>
    );
};

export default taskListTable;