import axios from 'axios';
function Post()
{
    let inputValue = document.getElementById('Input').value;
    const requestURL = 'http://localhost:3000/task';

    axios.post(requestURL, {
        taskName: inputValue
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}
export default Post;