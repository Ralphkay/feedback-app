import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'

export default function FeedbackList({feedback, handleDelete}){
    if(feedback.length<0){
        return <>No feedback yet</>
    }
   return <>
        {/* <h1 >Notes <small>{feedback.length}</small></h1> */}
       {
           feedback.map((item)=>{
               return <FeedbackItem key={item.id} item={item} handleDelete={(e)=>handleDelete(item.id)}/>
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