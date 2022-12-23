import React from 'react'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'

 export const User = () => {
  const data = [
    { firstName: "Shubham", lastName: "singh", email: "shubham.singh@gmail.com", phoneNumber: "987654321", address: "text area gujrat" },
    { firstName: "Saurabh", lastName: "singh", email: "shubham.singh@gmail.com", phoneNumber: "987654321", address: "text area gujrat" },
    { firstName: "Satyam", lastName: "singh", email: "shubham.singh@gmail.com", phoneNumber: "987654321", address: "text area gujrat" },
    { firstName: "Shivam", lastName: "singh", email: "shubham.singh@gmail.com", phoneNumber: "987654321", address: "text area gujrat" },
    { firstName: "Somil", lastName: "singh", email: "shubham.singh@gmail.com", phoneNumber: "987654321", address: "text area gujrat" },
    { firstName: "Shyam", lastName: "singh", email: "shubham.singh@gmail.com", phoneNumber: "987654321", address: "text area gujrat" },
    { firstName: "Shubham", lastName: "singh", email: "shubham.singh@gmail.com", phoneNumber: "987654321", address: "text area gujrat" },
    { firstName: "Sahu", lastName: "singh", email: "shubham.singh@gmail.com", phoneNumber: "987654321", address: "text area gujrat" },
    { firstName: "Shivani", lastName: "singh", email: "shubham.singh@gmail.com", phoneNumber: "987654321", address: "text area gujrat" },
  ]

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
    editable: true,  filter: true
  }

  return (
    <div className='ag-theme-alpine'
      style={{
        height: "500px",
        width: "995px"
      }}

    >
      <AgGridReact rowData={data} columnDefs={columns}  defaultColDef={defaultColDefinition}/>
    </div>
  )
}
