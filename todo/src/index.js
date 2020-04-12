import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {} from '@testing-library/react';
import NewTask from './components/newTask';
import Post from './components/Post';
import Get from './components/Get';
import * as serviceWorker from './serviceWorker';

class App extends Component{
  render()
  {
    return (
      <div className="mainBox">

        <div className="mainBox__inputBox">
          <input type="text" id="Input" placeholder="input something..."/>
          <input type="button" value="create" className="inputButton" onClick={forPost}/>
          <input type="button" value="get" className="inputButton" onClick={Get}/>
        </div>
        
        <div id="mainBox__resultBox">
          <div className="resultBox__newitemBox">
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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
