import React from 'react'
import { Route, Routes } from "react-router-dom";
import Main from '../Main';
import Jobs from '../Jobs/Jobs';

const Approute = () => {
  return (
   <Routes>
    <Route path="/" element={<Main/>}/>

    <Route path="/jobs" element={<Jobs/>}/>
   </Routes>
  )
}

export default Approute