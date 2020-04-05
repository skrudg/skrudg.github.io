import axios from 'axios';
import * as React from "jsx-dom";
import deleteTask from './deleteTask';
import completedTask from './completedTask';
import saveTask from './saveTask';
function Get()
{
    const requestURL = 'http://localhost:3000/task';

    axios.get(requestURL)
      .then(function (response) {
        Click(response);
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
                <input type="button" value="+" className="completedTask" onClick={completedTask}/>
                <input value={props.data[i].taskName} className="resultBox__newItem"/>
                <input type="button" value="del" className="close" onClick={deleteTask}/>
                <input type="button" value="save" className="save" onClick={saveTask}/>
            </div>
        )
    }
}
export default Get;