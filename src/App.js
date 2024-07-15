import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { showUSer } from './Store/Action/UserAction';
import UserTable from './UserTable';
import Loader from './Components/Loader';
const App = () => {
  const datas=useSelector((state)=>state.UserReducer)
  const [data,setData]=useState(datas?.USER_DATA);
  const [show,setShow]=useState(true);
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(showUSer());
  },[]);
  useEffect(()=>{
    setShow(!show)
  },[setData])
  useEffect(()=>{
    setData(datas?.USER_DATA)
    console.log(data)
  },[datas])
  return (
    <div>
    {
      show?
      <Loader />
      :
      <UserTable data={data} />
    }
    </div>
  )
}

export default App