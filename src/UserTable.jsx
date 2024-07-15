import { Button } from '@material-tailwind/react'
import React from 'react'
import { deleteUser } from './Store/Action/UserAction';
import { useDispatch } from 'react-redux';

const UserTable = ({data}) => {
  const dispatch=useDispatch();
  return (
    <>
    <table class="table-auto">
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Phone</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
      {
        data?.map(({email,phone,name})=>{
          return (
            <>    
  <tr data-testid="data" role='listitem'>
    <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>
        <button onClick={()=>{
          dispatch(deleteUser(email));
        }}>Delete</button>
      </td>
      </tr>
      </>


)
        })
      }
  </tbody>
</table>
​
    </>
  )
}

export default UserTable