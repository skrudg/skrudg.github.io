// import axios from 'axios';
function deleteTask()
{
    // const requestURL = 'http://localhost:3000/task';
    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        };
    }
}

export default deleteTask;