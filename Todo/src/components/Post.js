import axios from 'axios';
function Post()
{
    let inputValue = document.getElementById('Input').value;
    const requestURL = 'https://my-json-server.typicode.com/ssasai/server/task';

    axios.post(requestURL, {
        title: inputValue
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}
export default Post;