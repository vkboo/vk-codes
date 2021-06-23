
import axios from 'axios';
export const fetchComments = async (dispatch) => { 
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1/comments');
    dispatch({ type: 'SET_COMMENTS', payload: response.data });
}