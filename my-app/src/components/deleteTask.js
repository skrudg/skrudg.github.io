import axios from 'axios';
let itemToDelete = "";
const requestURL = 'http://localhost:3000/task/';
function deleteTask()
{
    let close = document.getElementsByClassName("close");
    let i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            let div = this.parentElement;
            itemToDelete = div.childNodes[1].value;
            div.style.display = "none";

            axios.get(requestURL)
                .then(function (response) {
                    Click(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        };
    }
}
function Click(props){
    for(var i = 0; i < props.data.length; i++)
    {
        if(props.data[i].taskName === itemToDelete)
        {
            // console.log(props.data[i].id);
            axios.delete(requestURL+props.data[i].id)
            .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
        }
    }
}
export default deleteTask;