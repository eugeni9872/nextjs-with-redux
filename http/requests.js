import axios from 'axios';


export const getPosts = async () => {
    const response = await axios.get('https://newapi-vhrwvkgjto.now.sh/');
    const data = await response.data;

    return data
}