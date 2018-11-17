import React, { Component } from 'react';

import TaskListTable from '../../components/TaskListTable/TaskListTable';
import TaskView from '../../components/TaskView/TaskView';
import * as constants from '../../utilities/constants';

//export const TASK_COLUMNS = ['Task ID', 'Assigned', 'Descriptiobn', 'Comments',
//'Status', 'Delivery', 'Relation type', 'Related To'];
const TEST_ROWS = [
    {
        id:1,
        assigned: 'Neven',
        description: 'Require to....',
        comments: 'Ad excepteur minim nisi nulla proident aliqua.',
        status: 'Developement',
        delivery: '1.0',
        reltype: 'implements',
        relto: '2'
    },
    {
        id:2,
        assigned: 'Neven',
        description: 'Require to....',
        comments: 'Ad excepteur minim nisi nulla proident aliqua.',
        status: 'Developement',
        delivery: '1.0',
        reltype: 'implemented by',
        relto: '1'
    }
]


class TaskList extends Component {
    state = {
        columns: constants.TASK_COLUMNS,
        rows: TEST_ROWS,
        rowsPerPage: 10
    }
    render() {

        return (
            <div>
                <TaskListTable headerRow = {this.state.columns} rows = {this.state.rows}/>
                <TaskView />
            </div>
        );
    }
}

export default TaskList;
