import axios from 'axios';
function saveTask()
{
    var save = document.getElementsByClassName("save");
    var i;
    for (i = 0; i < save.length; i++) {
        save[i].onclick = function() {
            var div = this.parentElement;
            var itemToChange = div.childNodes[1].value;
            console.log(itemToChange);
        };
    }

    // const requestURL = 'http://localhost:3000/task';
    // axios.put(requestURL)
    // .then(res => {
    //   this.setState({
    //     cat: res
    //   });
    // })
    // .catch((err) => {
    //   console.log(err);
    // })
}
export default saveTask;