
function Click()
{
    let inputValue = document.getElementById('Input').value;
    if(inputValue === "")
    {
      alert("Введите задание...");
    }
    else
    {
      let resultBox = document.getElementById('mainBox__resultBox');

      let newItemBox = document.createElement("div");
      newItemBox.setAttribute('class', 'resultBox__newitemBox');

      let newItem = document.createElement('input');
      newItem.setAttribute("value", inputValue);
      newItem.setAttribute('class', 'resultBox__newItem');

      newItemBox.appendChild(newItem);
      resultBox.appendChild(newItemBox);
    }
    document.getElementById('Input').value = "";
}

export default Click;