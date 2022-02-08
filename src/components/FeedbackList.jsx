import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'

export default function FeedbackList({feedback, handleDelete}){
    if(feedback.length<0){
        return <>No feedback yet</>
    }
   return <>
        <h1 >List {feedback.length}</h1>
       {

           feedback.map((item)=>{
               return <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}/>
           })
       }
        </>
   
}


FeedbackList.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
        })
    )
}