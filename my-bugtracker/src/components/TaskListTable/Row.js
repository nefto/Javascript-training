import React from 'react';
import classes from './Row.css';

const row = (props) => {
    const tableRow = [];
    for (const key in props.content) {
        const element = props.content[key];
        tableRow.push(<td key={key}>{element}</td>);
    }
    return (
        <tr key = {tableRow[0]} className={classes.TaskRow}>
            {tableRow}
        </tr>
    );
};

export default row;