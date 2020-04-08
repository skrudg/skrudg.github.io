import axios from 'axios';
const requestURL = 'http://localhost:3000/task/';
function mouseOver(){
    // console.log("main");
    let itemTochange = document.getElementsByClassName("resultBox__newItem");
    let i;
    let ifClicked = 0;
    for (i = 0; i < itemTochange.length; i++) {
        itemTochange[i].onclick = function() {
            let div = this.parentElement;
            ifClicked++;
            let itemToChange = div.childNodes[1].value;
            if(ifClicked === 1)
            {
                axios.get(requestURL)
                .then(function (response) {
                    mouseOut(ifClicked,itemToChange,response);
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
            return;
        };
    }
}
function mouseOut(ifClicked,itemToChange,props){
    if(ifClicked === 1)
    {
        let itemTopush = document.getElementsByClassName("resultBox__newItem");
        let i;
        for (i = 0; i < itemTopush.length; i++) {
            itemTopush[i].onmouseout = function() {
                if(ifClicked===1)
                {
                    let div = this.parentElement;
                    let itemTopush = div.childNodes[1].value;
                    // console.log(itemToDelete);
                    ifClicked++;
                    for(var i = 0; i < props.data.length; i++)
                    {
                        if(props.data[i].taskName === itemToChange)
                        {
                            // console.log(props.data[i].id);
                            axios.put(requestURL+props.data[i].id,{
                                taskName:itemTopush
                            })
                            .then(function (response) {
                                console.log(response);
                            })
                            .catch(function (error) {
                                console.log(error);
                            });
                        }
                    }
                }
            };
        }
    }
}
export default mouseOver;