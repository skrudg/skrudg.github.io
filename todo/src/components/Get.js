import axios from 'axios';
import * as React from "jsx-dom";
import deleteTask from './deleteTask';
import completedTask from './completedTask';
import MouseOver from './put';
function Get()
{
    const requestURL = 'https://my-json-server.typicode.com/ssasai/server/task';

    axios.get(requestURL)
      .then(function (response) {
        Click(response);
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}
function Click(props)
{
    let resultBox = document.getElementById('mainBox__resultBox');
    for(var i = 0; i < props.data.length; i++)
    {
        resultBox.appendChild(
            <div className='resultBox__newitemBox'>
                <input type="button" value="+" className="completedTask" onMouseOver={completedTask}/>
                <input onMouseOver={MouseOver} value={props.data[i].title} className="resultBox__newItem"/>
                <input type="button" value="del" className="close" onMouseOver={deleteTask}/>
            </div>
        )
    }
}
export default Get;