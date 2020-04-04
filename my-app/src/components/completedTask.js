import React from 'react';

function completedTask()
{
    let complete = document.getElementsByClassName("completedTask");
    let i;
    for (i = 0; i < complete.length; i++) {
        complete[i].onclick = function() {
            let div = this.parentElement;
            if(div.style.background === "green")
            {
                div.style.background = "rgb(235, 235, 235)";
            }
            else{
                div.style.background = "green";
            }
        };
    }
}

export default completedTask;