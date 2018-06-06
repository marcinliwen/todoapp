import React, { Component } from 'react';
import './App.css';

const Task = props =><div className="Task">{"Task number " + props.number}</div>;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskNumber: 1 
    };
  }
  AddTask = () =>{
    this.setState({taskNumber: this.state.taskNumber + 1})    
  }

  RemoveTask =()=>{
    if(this.state.taskNumber > 1){
    this.setState({taskNumber: this.state.taskNumber - 1})  
    }
  }
  ClearAllTask = () =>{
    this.setState({taskNumber: 1})
  }
  render() {
    const taskList = [];

    for (var i = 1 ; i < this.state.taskNumber; i += 1){
      taskList.push(<Task key={i} number={i} />)
    }
    return (
      <div className="App">
        <header className="App-header">
          <button className="Button" onClick={this.AddTask}>Add</button>
          <button className="Button" onClick={this.RemoveTask}>Remove</button>
          <button className="Button" onClick={this.ClearAllTask}>Clear</button>
        </header>
        <main className="App-main">
       {taskList}
       </main>
      </div>
    );
  }
}

export default App;

