import React from 'react'
import { AgGridReact } from 'ag-grid-react'
import { Link } from 'react-router-dom';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'
import { useState, useEffect } from 'react';
import { Grid, Button } from '@material-ui/core'
import FormDialog from './Dialog';
const initalValue = {firstName: "", lastName: "", email: "", phoneNumber: "", address: "" }

export const User = () => {
  const [tableData, setTableData] = useState(null);
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", phoneNumber: "", address: "" })

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onChange = (e) => {
    const { value, id } = e.target
    setFormData({ ...formData, [id]: value })
  }

  const url = 'http://localhost:4000/users'

  useEffect(() => {
    getUser()
  }, [])

  const getUser = () => {
    fetch(url).then(resp => resp.json()).then(resp => setTableData(resp))
  }

  const handleFormSubmit = () => {
    fetch(url, {
      method: "POST", body: JSON.stringify(formData), headers: {
        'content-type': "application/json"
      }
    }).then((resp) => resp.json()).then((resp) => {
      handleClose()
      getUser()
      setFormData(initalValue)
    })
  }

  const columns = [
    {
      headerName: "FirstName", field: "firstName"
    },
    {
      headerName: "LastName", field: "lastName"
    },
    {
      headerName: "Email", field: "email", floatingFilter: true
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

  return (
    <div className='ag-theme-alpine'
      style={{
        height: "360px",
<<<<<<< HEAD
        width: "1295px",
        textAlign: "center",
        alignItems: "center",
        overflow: "none"
=======
        width: "1295px", 
        textAlign:"center",
        alignItems:"center",
        overflow:"none"
>>>>>>> 6e282287caa4efe06b44f69d1dbf3e357f2c1417
      }}
    >

      <h1>User Page</h1>
      <Link to={'/'} className="navbar-brand">
        <i className='fa fa-mobile text-warning' /><h1>Click Me TO Go to Home Page</h1><span className='text-warning'>
        </span>
      </Link>
      <Link to={'/about'} className="navbar-brand">
        <i className='fa fa-mobile text-warning' /><h1>Click Me TO Go to About Page</h1><span className='text-warning'>
        </span>
      </Link>
<<<<<<< HEAD
      <Grid align="right">
        <Button variant="contained" color="primary" onClick={handleClickOpen}>Add New Record</Button>
      </Grid>  {""}
      <FormDialog open={open} handleClose={handleClose} data={formData} onChange={onChange} handleFormSubmit={handleFormSubmit} />
      <AgGridReact
        rowData={tableData}
        columnDefs={columns}
        defaultColDef={defaultColDefinition}
        pagination={true}
        paginationPageSize={5} />
=======




      <nav className="navbar navbar-light bg-light">
        <form className="form-inline">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={() => setSearchKey(e.target.value)} /> {""}
          <button className="btn btn-outline-success my-2 my-sm-0" onClick={handleSearch}>Search</button>
        </form>
      </nav>
      <AgGridReact rowData={state} columnDefs={columns} defaultColDef={defaultColDefinition} pagination={true} paginationPageSize={5} />
>>>>>>> 6e282287caa4efe06b44f69d1dbf3e357f2c1417
    </div>
  )
}
