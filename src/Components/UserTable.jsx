import { Button } from '@material-tailwind/react'
import React from 'react'
import { deleteUser } from '../Store/Action/UserAction';
import { useDispatch } from 'react-redux';

const UserTable = ({data}) => {
  const dispatch=useDispatch();
          return (
            <div className="flex items-center justify-center min-h-screen bg-white">
            <div className="p-6 px-0" >
          <table className="w-full text-left table-auto min-w-max">
            <thead>
              <tr  data-testid="data" role='listitem'>
                <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                  <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">Name</p>
                </th>
                <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                  <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">Email</p>
                </th>
                <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                  <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">Phone Number</p>
                </th>
                <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                  <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70"></p>
                </th>
              </tr>
            </thead>
            <tbody>
              {
                data?.map(({name,email,phone})=>{
                  return (
              <tr>
                <td className="p-4 border-b border-blue-gray-50">
                  <div className="flex items-center gap-3">
                    <p className="block font-sans text-sm antialiased font-bold leading-normal text-blue-gray-900">{name}</p>
                  </div>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">{email}</p>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">{phone}</p>
                </td>
                <td>
                  <button className= "font-bold text-red-500" onClick={()=>{
                  dispatch(deleteUser(email));
                }}>Delete</button>
                </td>
              </tr> 
                  )
                })
              }
            </tbody>
          </table>
        </div>
        
            </div>
          )
}

export default UserTable;