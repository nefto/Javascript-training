import React, { Component } from 'react';

import TaskListTable from '../../components/TaskListTable/TaskListTable';
import TaskView from '../../components/TaskView/TaskView';

class TaskList extends Component {
    state = {
        colomns: [],
        rows: [{id:1, status:2}],
        rowsPerPage: 10
    }
    render() {

        return (
            <div>
                <TaskListTable rows = {this.state.rows}/>
                <TaskView />
            </div>
        );
    }
}

export default TaskList;
