import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm'
import Control from './components/Control'
import TaskList from './components/TaskList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      isDisplayTaskForm: false,
      taskEditting: null,
      filter: {
        name: '',
        status: '-1'
      }
    }
  }

  componentWillMount() {
    if (localStorage && localStorage.getItem('tasks')) {
      var tasks = JSON.parse(localStorage.getItem('tasks'));
      this.setState({
        tasks: tasks
      })
    }
  }
  onGenerateData = () => {
    console.log('onGenerateData')
    var tasks = [{
      id: 1,
      name: 'Học lập trình',
      status: true
    }, {
      id: 2,
      name: 'Đi bơi',
      status: false
    }, {
      id: 3,
      name: 'Đi bộ',
      status: true
    }];
    // console.log(tasks);
    this.setState({
      tasks: tasks
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  onToggleForm = () => {
    if (this.state.taskEditting && this.state.taskEditting.id !== '') {
      this.setState({
        isDisplayTaskForm: true,
        taskEditting: null
      })
    } else {
      this.setState({
        isDisplayTaskForm: !this.state.isDisplayTaskForm,
        taskEditting: null
      })
    }
  }
  onCloseForm = () => {
    this.setState({
      isDisplayTaskForm: false
    })
  }
  onSubmit = (data) => {
    console.log(data)
    var { tasks } = this.state;
    data.status = data.status === "true" ? true : false;
    if (data.id === '') {
      data.id = this.state.tasks.length + 1;
      tasks.push(data);
    } else {
      var index = this.findIndex(data.id)
      tasks[index] = data;
    }
    this.setState({
      tasks: tasks,
      taskEditting: null
    })
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  onUpdateStatus = (id) => {
    var { tasks } = this.state;
    var index = this.findIndex(id);
    if (index !== -1) {
      tasks[index].status = !tasks[index].status;
      this.setState({
        tasks: tasks
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }
  onDelete = (id) => {
    var { tasks } = this.state;
    var index = this.findIndex(id);
    if (index !== -1) {
      tasks.splice(index, 1);
      this.setState({
        tasks: tasks
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }

  onUpdate = (task) => {
    var { taskEditting } = this.state;
    this.setState({
      taskEditting: task
    })
    this.onShowForm();
  }

  onFilter = (filterName, filterStatus) => {
    console.log(filterName, filterStatus, typeof filterStatus)
    this.setState({
      filter: {
        name: filterName.toLowerCase(),
        status: filterStatus
      }
    })
  }

  onShowForm = () => {
    this.setState({
      isDisplayTaskForm: true
    })
  }
  findIndex = (id) => {
    var { tasks } = this.state;
    var result = -1;
    tasks.forEach((item, index) => {
      if (item.id === id) {
        result = index
      }
    });
    return result;
  }
  render() {
    var { tasks, isDisplayTaskForm, taskEditting, filter } = this.state;
    if (filter) {
      if (filter.name) {
        tasks = tasks.filter((item) => {
          return item.name.toLowerCase().indexOf(filter.name) !== -1
        })
      }
      if (filter.status) {
        tasks = tasks.filter(item => {
          if (filter.status === '-1') {
            return tasks;
          }
          else {
            return item.status === (filter.status === '1' ? true : false)
          }
        })
      }
    }
      let elmTaskForm = isDisplayTaskForm ? <TaskForm
        onSubmit={this.onSubmit}
        onCloseForm={this.onCloseForm}
        taskEditting={taskEditting}
      /> : '';
      return (
        <div class="container">
          <div class="text-center">
            <h1>Quản Lý Công Việc</h1>
            <hr />
          </div>
          <div class="row">
            <div class={isDisplayTaskForm ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : ''}>
              {elmTaskForm}
            </div>
            <div class={isDisplayTaskForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
              <button type="button" class="btn btn-primary" onClick={this.onToggleForm}>
                <span class="fa fa-plus mr-5"></span>Thêm Công Việc
              </button>
              <button type="button" class="btn btn-danger" onClick={this.onGenerateData}>
                <span class="fa fa-plus mr-5"></span>Generate Data
              </button>
              <Control />
              <div class="row mt-15">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <TaskList
                    tasks={tasks}
                    onUpdateStatus={this.onUpdateStatus}
                    onDelete={this.onDelete}
                    onUpdate={this.onUpdate}
                    onFilter={this.onFilter}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  export default App;