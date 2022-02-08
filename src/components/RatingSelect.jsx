import React, {useState} from 'react';

export default function RatingSelect() {
    const [selected,setSelected] = useState(1)

    const handleChange = ()=>{

    }
  return <div>
      <ul className="rating">
        <li>
            <input type="radio" id='num1' name="rating" value='1' onChange={handleChange} checked={selected==1} />
            <label htmlFor="num1">1</label>
        </li>

        <li>
            <input type="radio" name="rating" id='num2' value='2' onChange={handleChange} checked={selected==2} />
            <label htmlFor="num2">2</label>

        </li>

        <li>
            <input type="radio" name="rating" value='3' id='num3' onChange={handleChange} checked={selected==3} />
            <label htmlFor="num3">3</label>

        </li>

        <li>
            <input type="radio" name="rating" value='4' id='num4' onChange={handleChange} checked={selected==4} />
            <label htmlFor="num4">4</label>

        </li>

        <li>
            <input type="radio" name="rating" value='5' id='num5' onChange={handleChange} checked={selected==5} />
            <label htmlFor="num5">5</label>

        </li>
      </ul>
  </div>;
}
