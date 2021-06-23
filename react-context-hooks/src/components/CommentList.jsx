import { useEffect, useContext } from 'react';
import { CommentContext } from '../store/CommentProvider'
import { fetchComments } from '../store/commentAction';

function CommentList() {
    const { state, dispatch } = useContext(CommentContext);
    
    useEffect(() => { 
        fetchComments(dispatch); 
    }, []);
 
    return (<ul> 
        {state.comments.map((comment) => (
            <li key={comment.id}><p>{comment.body}</p><span>{comment.name}</span></li> 
        ))}
    </ul>);
}

export default CommentList;