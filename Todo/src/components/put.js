import axios from 'axios';
const requestURL = 'https://my-json-server.typicode.com/ssasai/server/task/';
function mouseOver(){
    let itemTochange = document.getElementsByClassName("resultBox__newItem");
    let ifClicked = 0;
    for (let i = 0; i < itemTochange.length; i++) {
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
                    ifClicked++;
                    for(var i = 0; i < props.data.length; i++)
                    {
                        if(props.data[i].title === itemToChange)
                        {
                            axios.put(requestURL+props.data[i].id,{
                                title:itemTopush
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