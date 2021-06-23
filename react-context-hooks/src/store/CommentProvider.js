// CommentProvider.js
import { createContext, useReducer } from 'react';
export const CommentContext = createContext({});

// commentReducer.js
const commentReducer = (state, action) => { 
    if (action.type === 'SET_COMMENTS') { 
        return { ...state, comments: action.payload }; 
    }
    return state;
};

const CommentProvider = ({ children }) => { 
    const [state, dispatch] = useReducer(commentReducer, { comments: [] });
    return ( 
        <CommentContext.Provider value={{ state, dispatch }}> 
            {children} 
        </CommentContext.Provider> 
    );
};

export default CommentProvider;