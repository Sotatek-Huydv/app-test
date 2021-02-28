import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index'

class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            status: false
        }
    }

    componentWillMount() {
        if (this.props.taskEditting && this.props.taskEditting.id !== '') {
            this.setState({
                id: this.props.taskEditting.id,
                name: this.props.taskEditting.name,
                status: this.props.taskEditting.status
            })
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.taskEditting) {
            this.setState({
                id: nextProps.taskEditting.id,
                name: nextProps.taskEditting.name,
                status: nextProps.taskEditting.status
            })
        }else {
            this.setState({
                id: "",
                name: "",
                status: false
            })
        }
    }
    onCloseForm = () => {
        this.props.onCloseForm();
    }
    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        })
    }
    onSubmit = (event) => {
        event.preventDefault();
        // console.log(this.state)
        // this.props.onSubmit(this.state)
        this.props.onAddTask(this.state)
        this.cancelForm();
    }
    cancelForm = () => {
        this.onCloseForm();
        this.clearForm();
    }
    clearForm = () => {
        this.setState({
            name: '',
            status: false
        })
    }
    render() {
        var { id }= this.state;
        return (
            <div class="panel panel-warning">
                <div class="panel-heading">
                    <h3 class="panel-title">{id ? 'Cập nhật công việc' :'Thêm Công Việc'}
                <span class="fa fa-times-circle text-right" onClick={this.onCloseForm}> x</span>
                    </h3>
                </div>
                <div class="panel-body">
                    <form onSubmit={this.onSubmit}>
                        <div class="form-group">
                            <label>Tên :</label>
                            <input type="text" class="form-control" name="name"
                                value={this.state.name}
                                onChange={this.onChange} />
                        </div>
                        <label>Trạng Thái :</label>
                        <select class="form-control" name="status" value={this.state.status}
                            onChange={this.onChange}>
                            <option value={true}>Kích Hoạt</option>
                            <option value={false}>Ẩn</option>
                        </select>
                        <br />
                        <div class="text-center">
                            <button type="submit" class="btn btn-warning">Thêm</button>&nbsp;
                        <button type="submit" class="btn btn-danger" onClick={this.cancelForm}>Hủy Bỏ</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const dispatchToProps = (dispatch, props) => {
    return {
        onAddTask: (task) => {
            dispatch(actions.addTask(task))
        }
    }
}

export default connect(null, dispatchToProps)(TaskForm);