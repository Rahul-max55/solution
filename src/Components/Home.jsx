import React, { useState } from 'react';
import "./Home.css";
import { useSelector, useDispatch } from 'react-redux';
import NameDrop from './NameDrop';
import PriceDrop from './PriceDrop';

const Home = () => {



  let reduxData = useSelector(store => store.filters);
  const { initialApiVal, filterName } = reduxData;





  return (<>
    <div style={{ display: "flex" }}>
      <NameDrop/>
      <PriceDrop/>
    </div>
  </>
  )
}

export default Home