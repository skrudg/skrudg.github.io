import deleteTask from './deleteTask';
import * as React from "jsx-dom"
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
                <div className='resultBox__newitemBox'>
                  <input value={inputValue} className="resultBox__newItem"/>
                  <input type="button" value="x" className="close" onClick={deleteTask}/>
                </div>
            )
        ); 
    }
}
export default Click;