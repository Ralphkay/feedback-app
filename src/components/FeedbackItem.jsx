import {useState} from 'react'
export default function FeedbackItem(){
    const [rating, setRating] = useState(7)
    const [text, setText] = useState('This is an example of a feedback item')

    let handleClick = ()=>{
        // setRating((prev)=>prev+1)
        setRating(10)
    }
    return (
        <div className="card">
            <div className="num-display">{rating}</div>
            <div className="text-display">
                {text}
            </div>
            <button onClick={handleClick}>Click</button>
        </div>
    )
}