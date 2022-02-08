import Card from './shared/Card'
import PropTypes from 'prop-types'
import {FaTimes} from 'react-icons/fa'


export default function FeedbackItem({item, handleDelete}){

  

    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <div className="text-display">
                {item.text}
            </div>

            <button onClick={(e)=>{handleDelete()}} className="close">
                <FaTimes color="purple"/>
            </button>

        </Card>
    )
}

FeedbackItem.propTypes = {
    item:PropTypes.object.isRequired
}