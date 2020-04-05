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
    // let inputValue = document.getElementById('Input').value;
    // console.log(inputValue);
    const requestURL = 'http://46.101.146.101:8081/categories/';
    axios.get(requestURL)
        .then(response => console.log("response", response.data));
    

    // const data = { 'title': inputValue};
    // const options = {
    //     method: 'POST',
    //     headers: { 'content-type': 'application/x-www-form-urlencoded' },
    //     data: qs.stringify(data),
    //     requestURL,
    // };
    // axios(options);

}
export default Post;