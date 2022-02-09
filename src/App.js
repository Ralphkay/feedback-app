import React, {useState, useEffect} from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import './index.css'
import FeedbackData from './data/FeedbackData'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'

const App = ()=>{
    const [feedback, setFeedback] = useState(FeedbackData)
    
    useEffect(() => {
        fetch('http://localhost:3000/notes')
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data)
            setFeedback(data)})
    },[])

    const deleteFeedback = (id)=>{
        console.log(id)
        // found = feedback.find(item => item.id === id)
        setFeedback(feedback.filter(item => item.id !== id))
        console.log("feedback", feedback)
       if (window.confirm('Are you sure you want to delete this')){
           console.log('delete')
        
           fetch(`http://localhost:3000/notes/${id}`,{
               method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
           }).then((data)=>{
            console.log('Success : ', data)
           })
       }
    }

    const addFeedback = (data)=>{
        let id = Number(feedback.length + 1)
        const d = {...data, id}
        setFeedback([d, ...feedback])

        fetch('http://localhost:3000/notes', {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(d)
        }).then((data => console.log('Success :' + data)))

        setFeedback('')
    }

    return (
        <>
        <Header/>
        <div className="container">
            <FeedbackForm handleForm={addFeedback}></FeedbackForm>
        <FeedbackStats feedback={feedback}></FeedbackStats>
            <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
        </div>

 
        </>

    )
}

export default App