import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {render} from '@testing-library/react';
import NewTask from './components/newTask';

class App extends Component{
  state = {
    name: "hello",
    age: 30
  };
  Click(props) {
    // let inputValue = document.getElementById("Input").value;
    // alert(inputValue);
    return <NewTask name = {this.props.name}/>;
  }
  render()
  {
    return (
      <div className="mainBox">
        <div className="mainBox__inputBox">
          <input type="text" id="Input" placeholder="input something"/>
          <button onClick={this.Click.bind(this)}>click on me</button>
        </div>
        
        <div className="mainBox__resultBox">
          <input value="New task will appear below..."/>
          <this.Click/>
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
