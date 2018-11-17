import React from 'react';

const row = (props) => {
    const tableRow = [];
    for (const key in props.content) {
        const element = props.content[key];
        tableRow.push(<td>{element}</td>);
    }
    return (
        <tr>
            {tableRow}
        </tr>
    );
};

export default row;