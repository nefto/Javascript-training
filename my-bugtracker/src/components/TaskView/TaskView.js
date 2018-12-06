import React from 'react';

import Row from '../TaskListTable/Row';

const taskView = (props) => {
    
    return (
      
        <div>
            <Row content = {props.content} ></Row>   
        </div>
    );
};

export default taskView;