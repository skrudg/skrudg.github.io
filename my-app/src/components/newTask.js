import * as React from "jsx-dom";
import deleteTask from './deleteTask';
import completedTask from './completedTask';
import saveTask from './saveTask';
import MouseOver from './onmouse';

function Click()
{
    let inputValue = document.getElementById('Input').value;
    document.getElementById('Input').value = "";
    if(inputValue === "")
    {
      alert("Введите задание...");
    }
    else
    {
        let resultBox = document.getElementById('mainBox__resultBox');
        return (
            resultBox.appendChild(
                <div onMouseOverCapture={MouseOver} className='resultBox__newitemBox'>
                    <input type="button" value="+" className="completedTask" onClick={completedTask}/>
                    <input value={inputValue} className="resultBox__newItem"/>
                    <input type="button" value="del" className="close" onClick={deleteTask}/>
                    <input type="button" value="save" className="save" onClick={saveTask}/>
                </div>
            )
        );
    }
}
export default Click;