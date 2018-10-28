import axios from 'axios';


export const getPosts = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/');
    const data = await response.data;

    return data
}

export const getUsers = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    const responseData = await response.data;
    
    return responseData;
}