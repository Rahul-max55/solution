import React, { useState } from 'react';
import { BiUpArrow } from 'react-icons/bi';
import Checkbox from './Checkbox';
import { useSelector } from 'react-redux';


const PriceDrop = () => {
    
    let reduxData = useSelector(store => store.filters);
    const { uniqueP } = reduxData;


    const [modal, setModal] = useState({ he: "0px", op: "0", ro: "0deg" });
    const handleOver = () => {
        setModal({ he: "150px", op: "1", ro: "180deg" });
    }

    const handleOut = () => {
        setModal({ he: "0px", op: "0", ro: "0deg" });
    }


  return (
      <div className="filter_bar">
          <div className="One_filter" onMouseOver={handleOver} onMouseOut={handleOut} >
              <h4>Price</h4>
              <BiUpArrow style={{ transform: `rotate(${modal.ro})` }} />
              <div className="modal_list" style={{ minHeight: modal.he, opacity: modal.op }} >

                  {uniqueP?.map((v) => {
                      return <Checkbox key={v} val={v} />
                  })
                  }
              </div>
          </div>
      </div>
  )
}

export default PriceDrop