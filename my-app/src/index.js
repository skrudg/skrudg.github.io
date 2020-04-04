import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {} from '@testing-library/react';
import NewTask from './components/newTask';

function Click()
{
    let inputValue = document.getElementById('Input').value;
    let resultBox = document.getElementById('mainBox__resultBox');
    let newItem = document.createElement('input');
    newItem.setAttribute("value", inputValue);
    resultBox.appendChild(newItem);
}

class App extends Component{
  render()
  {
    return (
      <div className="mainBox">
        <div className="mainBox__inputBox">
          <input type="text" id="Input" placeholder="input something"/>
          <button onClick={Click}>click on me</button>
        </div>
        
        <div id="mainBox__resultBox">
          <input value="New task will appear below..."/>
          {/* <this.Click name={this.state.name}/> */}
          {/* <NewTask name={this.state.name}/> */}
        </div>
      </div>
    );
  }
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
