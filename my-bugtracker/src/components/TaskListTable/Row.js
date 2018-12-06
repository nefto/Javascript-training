import React from 'react';
import classes from './Row.css';

const row = (props) => {
    const tableRow = [];
    console.log(props);
    for (const key in props.content) {
        const element = props.content[key].toString().length>15
        ?props.content[key].toString().substring(0,16)+'..'
        :props.content[key];
        tableRow.push(<td key={key}>{element}</td>);
    }
    return (
        <tr className={classes.TaskRow}
            onClick={(event) => props.clicked(event, props.content.id)}>
            {tableRow}
        </tr>
    );
};

export default row;