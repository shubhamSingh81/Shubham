import React from 'react'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'
import { useState } from 'react';

export const User = () => {
  
  const data = [
    { firstName: "Shubham", lastName: "singh", email: "shubham.singh@gmail.com", phoneNumber: "987654321", address: "gujrat" },
    { firstName: "Saurabh", lastName: "Tiwari", email: "Saurabh.singh@gmail.com", phoneNumber: "987654329", address: "Vapi" },
    { firstName: "Satyam", lastName: "Sahu", email: "Satyam.singh@gmail.com", phoneNumber: "987654320", address: "Surat" },
    { firstName: "Shivam", lastName: "Sombi", email: "Shivam.singh@gmail.com", phoneNumber: "987654392", address: "Valsad" },
    { firstName: "Somil", lastName: "singh", email: "Somil.singh@gmail.com", phoneNumber: "987654371", address: "gujrat" },
    { firstName: "Shyam", lastName: "singh", email: "Shyam.singh@gmail.com", phoneNumber: "987654334", address: "Daman" },
    { firstName: "Shubham", lastName: "singh", email: "shubham@gmail.com", phoneNumber: "987654365", address: "deo" },
    { firstName: "Sahu", lastName: "singh", email: "Sahu.singh@gmail.com", phoneNumber: "9876543433", address: "Neomar" },
    { firstName: "Shivani", lastName: "singh", email: "Shivani@gmail.com", phoneNumber: "987654345", address: "MENT" },
  ]

  const [state, setState] = useState(data);
  const [searchKey, setSearchKey] = useState('');

  const columns = [
    {
      headerName: "FirstName", field: "firstName"
    },
    {
      headerName: "LastName", field: "lastName"
    },
    {
      headerName: "Email", field: "email"
    },
    {
      headerName: "PhoneNumber", field: "phoneNumber"
    },
    {
      headerName: "Address", field: "address"
    },

  ]

  const defaultColDefinition = {
    editable: true, filter: true
  }

  const handleSearch = () =>{
    const filteredData = data.filter( (value)=> value.email= data.email); 
    setState(filteredData)
  }

  return (
    <div className='ag-theme-alpine'
      style={{
        height: "500px",
        width: "995px"
      }}
    >
      <nav className="navbar navbar-light bg-light">
        <form className="form-inline">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"  onChange={()=> setSearchKey(e.target.value)}/> {""}
          <button className="btn btn-outline-success my-2 my-sm-0"  onClick={handleSearch}>Search</button>
        </form>
      </nav>
      <AgGridReact rowData={state} columnDefs={columns} defaultColDef={defaultColDefinition} />
    </div>
  )
}
