import React, { Component } from 'react';

import TaskListTable from '../../components/TaskListTable/TaskListTable';
import TaskView from '../../components/TaskView/TaskView';
import * as constants from '../../utilities/constants';

//export const TASK_COLUMNS = ['Task ID', 'Assigned', 'Descriptiobn', 'Comments',
//'Status', 'Delivery', 'Relation type', 'Related To'];
const TEST_ROWS = [
    {
        id: 1,
        assigned: 'Neven',
        description: 'Require to....Dolor eiusmod voluptate ullamco amet ex. Deserunt laboris sit aute et enim tempor duis officia esse cupidatat ipsum minim. Mollit consectetur sint proident pariatur aliquip enim enim.',
        comments: 'Ea dolore pariatur mollit aliquip nisi laboris anim occaecat do ea irure voluptate. Duis eiusmod aliqua incididunt adipisicing mollit. Minim aute Lorem labore sit esse proident magna consectetur cupidatat laborum dolore.',
        status: 'Developement',
        delivery: '1.0',
        reltype: 'implements',
        relto: '2'
    },
    {
        id: 2,
        assigned: 'Neven2',
        description: 'Require to....',
        comments: 'Ad excepteur minim nisi nulla proident aliqua.',
        status: 'Developement',
        delivery: '1.0',
        reltype: 'implemented by',
        relto: '1'
    }
]

const users = ['Neven', 'Neven1', 'Neven2'];

class TaskList extends Component {
    state = {
        columns: constants.TASK_COLUMNS,
        rows: TEST_ROWS,
        rowsPerPage: 10,
        activeRow: null
    }

    rowOnClick = (event, key) => {
        event.preventDefault();
        this.setState({
            activeRow: key
        })
    }

    render() {
        let taskView = null;
        if (this.state.activeRow)
            taskView = this.state.rows.find(elem=>elem.id===this.state.activeRow);
        return (
            <div>
                <TaskListTable headerRow={this.state.columns}
                    rows={this.state.rows}
                    rowClicked={this.rowOnClick} />
                <TaskView content={taskView} />
            </div>
        );
    }
}

export default TaskList;
