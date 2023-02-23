import React, { useState } from 'react';
import "./Home.css";
import { BiUpArrow } from 'react-icons/bi';
import { useSelector, useDispatch } from 'react-redux';
import RadioItem from './RadioItem';

const Home = () => {

  const [modal, setModal] = useState({ he: "150px", op: "1", ro: "0deg" });
  let reduxData = useSelector(store => store.filters);
  const { uniqueName } = reduxData;



  const handleOver = () => {
    setModal({ he: "150px", op: "1", ro: "180deg" });
  }

  const handleOut = () => {
    setModal({ he: "0px", op: "0", ro: "0deg" });
  }


  return (
    <div className="filter_bar">
      <div className="One_filter" onMouseOver={handleOver} onMouseOut={handleOut} >
        <h4>name</h4>
        <BiUpArrow style={{ transform: `rotate(${modal.ro})` }} />
        <div className="modal_list" style={{ minHeight: modal.he, opacity: modal.op }} >
          {uniqueName.map((v, i) => {
            return <RadioItem value={v} key={i} id={i} uniqueName={uniqueName} />
          })
          }
        </div>
      </div>
    </div>
  )
}

export default Home