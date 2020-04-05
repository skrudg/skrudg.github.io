import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {} from '@testing-library/react';
import NewTask from './components/newTask';
import Post from './components/Post';

class App extends Component{
  render()
  {
    return (
      <div className="mainBox">

        <div className="mainBox__inputBox">
          <input type="text" id="Input" placeholder="input something..."/>
          <input type="button" value="click on me" id="inputButton" onClick={forPost}/>
        </div>
        
        <div id="mainBox__resultBox">
          <div className="resultBox__newitemBox">
            <input className="resultBox__newItem" value="New task will appear below..."/>
          </div>
        </div>

      </div>
    );
  }
}
function forPost()
{
  Post();
  NewTask();

}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
