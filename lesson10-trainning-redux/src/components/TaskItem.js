import React, { Component } from 'react';

class TaskItem extends Component {
    onUpdateStatus = () => {
        // console.log(this.props.task.id)
        this.props.onUpdateStatus(this.props.task.id);
    }
    onDelete = () => {
        this.props.onDelete(this.props.task.id);
    }

    onUpdate = () => {
        this.props.onUpdate(this.props.task)
    }
    render() {
        var { task, index } = this.props;
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{task.name}</td>
                <td class="text-center">
                    <span class={task.status === true ? "label label-success" : "label label-danger" } onClick={this.onUpdateStatus}>
                        {task.status === true ? 'Kich hoat' : 'An'}
                    </span>
                </td>
                <td class="text-center">
                    <button type="button" class="btn btn-warning" onClick={ this.onUpdate }>
                        <span class="fa fa-pencil mr-5"></span>Sửa
            </button>
            &nbsp;
            <button type="button" class="btn btn-danger" onClick={ this.onDelete }>
                        <span class="fa fa-trash mr-5"></span>Xóa
            </button>
                </td>
            </tr>
        );
    }
}

export default TaskItem;