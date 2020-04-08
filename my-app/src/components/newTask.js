import * as React from "jsx-dom";
import deleteTask from './deleteTask';
import completedTask from './completedTask';
import MouseOver from './onmouse';

function Click()
{
    let inputValue = document.getElementById('Input').value;
    document.getElementById('Input').value = "";
        let resultBox = document.getElementById('mainBox__resultBox');
        return (
            resultBox.appendChild(
                <div className='resultBox__newitemBox'>
                    <input type="button" value="+" className="completedTask" onMouseOver={completedTask}/>
                    <input onMouseOver={MouseOver} value={inputValue} className="resultBox__newItem"/>
                    <input type="button" value="del" className="close" onMouseOver={deleteTask}/>
                </div>
            )
        );
}
export default Click;