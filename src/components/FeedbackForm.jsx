import React,{useState} from 'react';
import RatingSelect from './RatingSelect';
import Button from './shared/Button';
import Card from './shared/Card';

export default function FeedbackForm() {
    const [text, setText] = useState('')
    const [isDisabled, setIsDisabled] = useState(true)
    const [message, setMessage] = useState(null)
    const handleChange = (e)=>{
        if (text.trim().length <= 10){
            setIsDisabled(true)
            setMessage('Characters must be at least 10 characters long')
        }else if(text.trim().length == 0){
            setMessage('')
            setIsDisabled(true)
        }
        else{
            setIsDisabled(false)
            setMessage('')
        }
        setText(e.currentTarget.value)
        // console.log(e.target.value)
    }

  return <Card>
      <form>
          <h2>How would you rate our service today?</h2>
          <RatingSelect></RatingSelect>
          <div className="input-group">
              <input type="text" value={text} onChange={(e)=>handleChange(e)} placeholder="Write review"/>
              <Button isDisabled={isDisabled} version="secondary"></Button>
          </div>
      </form>
      {message && <div className='message'>{message}</div>}
  </Card>;
}
