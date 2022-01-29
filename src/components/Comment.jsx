import {useState} from 'react'
const comments = [
    {id: 1, name: 'Ralphkay', comment:"I know 1"},
    {id: 2, name: 'John', comment:"I know 2"},
    {id: 3, name: 'Mac', comment:"I know 3"},
];


const CommentApp = ()=>{

    const [showComments, setShowComments] = useState(false)

    const toggleComments = (show)=>{
        setShowComments(!show)
    }


    const commentsComponent = <ul>
    {comments.map((comment,index)=>(
        <li key={comment.id}>{comment.comment} by {comment.name}</li>
    ))}
    </ul>

    return (<>
    
            <h1>Comment Header</h1>
            <p>Comments {comments.length}</p>
            <button onClick={(e)=>{toggleComments(showComments)}}>Toggle Comments</button>
          
            {showComments && commentsComponent}
            

    </>)
}



export default CommentApp