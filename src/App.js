import React, {useState} from 'react'
import Header from './components/Header'
import FeedbackItem from './components/FeedbackItem'
import './index.css'
import FeedbackData from './data/FeedbackData'

const App = ()=>{
    const [feedback, setFeedback] = useState(FeedbackData)
    return (
        <>
        <Header/>

        <div className="container">

            <FeedbackList/>

        </div>

 
        </>

    )
}

export default App