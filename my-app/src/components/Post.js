import React, { Component } from 'react';
import axios from 'axios';
import qs from 'qs';

// class Post extends Component{
//     render()
//     {
//         return(alert("hellobitch"));
//     }
// }
function Post()
{
    let inputValue = document.getElementById('Input').value;
        console.log(inputValue);
    // let url = "my-json-server.typicode.com/user/repo/posts/1";
    axios.get("https://jsonplaceholder.typicode.com/todos/1")
        .then(response => console.log("response", response.data));
    

    // const data = { 'title': inputValue};
    // const options = {
    //     method: 'POST',
    //     headers: { 'content-type': 'application/x-www-form-urlencoded' },
    //     data: qs.stringify(data),
    //     url,
    // };
    // axios(options);

}
export default Post;