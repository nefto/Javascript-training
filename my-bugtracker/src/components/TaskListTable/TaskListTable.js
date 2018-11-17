import React from 'react';

import Row from './Row'

const taskListTable = (props) => {
    const rows = props.rows.map(row=>{
        return <Row content = {row}/>
    })
    return (
        <table>
            {rows}
        </table>
    );
};

export default taskListTable;