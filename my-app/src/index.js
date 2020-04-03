import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { render } from '@testing-library/react';
import newTask from './components/newTask';
// import newTask from './components/newTask'

class App extends Component{
  Click() {
    let inputValue = document.getElementById("Input").value;
    return <newTask/>
  }
  render()
  {
    return (
      <div className="mainBox">
        <div className="mainBox__inputBox">
          <input type="text" id="Input" placeholder="input something"></input>
          <button onClick={this.Click.bind(this)}>click on me</button>
        </div>
        
        <div className="mainBox__resultBox">
          <input value="New task will appear below..."></input>
          <this.Click/>
        </div>
      </div>);
  }
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
