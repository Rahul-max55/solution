import React from 'react';
import { useDispatch } from 'react-redux';
import { filterRadio } from './action';

const RadioItem = ({value , id , uniqueName}) => {
    let dispatch = useDispatch();

    const handleRadio = () => {
        dispatch(filterRadio(id));
    }
  return (
      <div className="row"  >
          <input type="checkbox" onClick={handleRadio} id='check' />
          <label htmlFor="check">{value}</label>
      </div>
  )
}

export default RadioItem