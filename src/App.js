import React, {useState} from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import './index.css'
import FeedbackData from './data/FeedbackData'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'

const App = ()=>{
    const [feedback, setFeedback] = useState(FeedbackData)
    
    const deleteFeedback = ()=>{
       if (window.confirm('Are you sure you want to delete this')){
           console.log('delete')
       }
    }
    return (
        <>
        <Header/>
        <div className="container">
            <FeedbackForm></FeedbackForm>
        <FeedbackStats feedback={feedback}></FeedbackStats>
            <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
        </div>

 
        </>

    )
}

export default App