import React from 'react';

import Row from './Row';
import classes from './TaskListTable.css';

const taskListTable = (props) => {
    console.log(props.rows);
    const rows = props.rows.map(row => {
        return <Row key={row.id} content={row} clicked = {props.rowClicked}/>
    });
    const headerRow = <tr>{props.headerRow.map(colName => (<th key={colName}>{colName}</th>))}</tr>
    return (
        <div className={classes.TaskList}>
            <table className={classes.TaskListTable}>
                <thead>{headerRow}</thead>
                <tbody>{rows}</tbody>
            </table>
        </div>
    );
};

export default taskListTable;