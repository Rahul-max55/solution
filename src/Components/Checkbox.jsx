import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterName } from './action';


const Checkbox = ({ val }) => {

    const [isChecked, setIsChecked] = useState(false);
    const dispatch = useDispatch();
    
    const handleOnChange = (val) => {
        setIsChecked(!isChecked)
        dispatch(filterName(val))
    }

  return (
      <div className="row">
          <label htmlFor={val}>
          <input type="checkbox" value={val} id={val} checked={isChecked} onChange={() => handleOnChange(val)} />
          {val}</label>
      </div>
  )
}

export default Checkbox