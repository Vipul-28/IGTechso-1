import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { showUSer } from './Store/Action/UserAction';
import Loader from './Components/Loader';
import UserTable from './Components/UserTable';
import SideNav from './Components/SideNav';
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
    <div className='bg-gray-900'>
    {
      show?
      <Loader />
      :
      <UserTable data={datas?.USER_DATA} />
    }
    </div>
  )
}

export default App