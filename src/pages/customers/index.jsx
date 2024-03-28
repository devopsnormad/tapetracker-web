import React, { useState } from 'react';
import Header from '../../components/Header';
import { Typography, Box, useTheme, Dialog, DialogTitle, DialogContent, DialogActions, Button, IconButton, TextField, Grid, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from '../../theme';
import { Edit, Delete } from '@mui/icons-material';
import { mockDataCustomer } from '../../data/mockData';

const Customers = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const columns = [
    { field: 'id', headerName: 'S/N', flex: 1, },
    { field: 'name', headerName: 'Customer Name', flex: 1, },
    { field: 'phone', headerName: 'Phone Number', flex: 1, },
    { field: 'gender', headerName: 'Gender', flex: 1, },
    {
      field: 'view',
      headerName: 'View',
      width: 100,
      renderCell: (params) => (
        <Button onClick={() => {
          setSelectedCustomer({ ...params.row, measurements: params.row.measurements || [] });
          setOpenDialog(true);
        }}
        color="secondary"
        variant="contained"
        sx={{marginRight:"30px"}}>
          View
        </Button>
      ),
    },
  ];

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    // Implement logic to save changes to the selected customer
    console.log('Saving changes for customer:', selectedCustomer);
    setIsEditing(false);
    setOpenDialog(false);
  };

  return (
    <Box m="20px">
      <Header title="CUSTOMERS" subtitle="View and manage customers measurements, contact information, and order history." />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.gray[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataCustomer}
          columns={columns}
          pageSize={5}
          components={{ Toolbar: GridToolbar }}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
        />
      </Box>
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="lg"
        PaperProps={{
          style: {
            width: '600px',
            height: '550px',
            overflow: 'auto',
           
          },
        }}
        sx={{
          '& .MuiDialog-paper': {
            backgroundColor: theme.palette.background.default, 
          },
        }}>
        <DialogTitle>Customer Details</DialogTitle>
        <DialogContent  sx={{ display: "flex", flexDirection:"column", gap:"30px", marginTop:"20px"}}>
          {selectedCustomer && (
            <>
              {isEditing ? (
                <Grid container spacing={2} marginTop="4px">
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Customer Name"
                      defaultValue={selectedCustomer.name}
                      onChange={(e) => setSelectedCustomer({ ...selectedCustomer, name: e.target.value })}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Phone"
                      defaultValue={selectedCustomer.phone}
                      onChange={(e) => setSelectedCustomer({ ...selectedCustomer, name: e.target.value })}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Gender"
                      defaultValue={selectedCustomer.gender}
                      onChange={(e) => setSelectedCustomer({ ...selectedCustomer, name: e.target.value })}
                    />
                  </Grid>
                  {/* Add more fields as needed */}
                  {selectedCustomer.measurements.map((measurement, index) => (
                    <Grid item xs={12} key={index}>
                      <TextField
                        fullWidth
                        label={`Measurement Name ${index + 1}`}
                        defaultValue={measurement.name}
                        onChange={(e) => {
                          const newMeasurements = [...selectedCustomer.measurements];
                          newMeasurements[index].name = e.target.value;
                          setSelectedCustomer({ ...selectedCustomer, measurements: newMeasurements });
                        }}
                      />
                      <TextField
                        fullWidth
                        label={`Measurement Value ${index + 1}`}
                        defaultValue={measurement.value}
                        onChange={(e) => {
                          const newMeasurements = [...selectedCustomer.measurements];
                          newMeasurements[index].value = e.target.value;
                          setSelectedCustomer({ ...selectedCustomer, measurements: newMeasurements });
                        }}
                      />
                    </Grid>
                  ))}
                  <Grid item xs={12}>
                    <Button variant="contained" color="primary" onClick={() => {
                      const newMeasurements = [...selectedCustomer.measurements, { name: '', value: '' }];
                      setSelectedCustomer({ ...selectedCustomer, measurements: newMeasurements });
                    }}>
                      Add New Measurement
                    </Button>
                  </Grid>
                </Grid>
              ) : (
                <>
                  <Typography variant="h4">Name: {selectedCustomer.name}</Typography>

                  <Typography>Address: {selectedCustomer.address}</Typography>
                  <Typography>Email: {selectedCustomer.email}</Typography>
                  <Typography>Phone Number: {selectedCustomer.phoneNumber}</Typography>
                  <Typography>Measurements: {selectedCustomer.measurements.map((measurement, index) => (
                    <div key={index}>{measurement.name}: {measurement.value}</div>
                  ))}</Typography>
                </>
              )}
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} 
          sx={{
            '&:hover': {
              backgroundColor: colors.blueAccent[500], // Change to redAccent on hover
            },
          }}>
            Close
          </Button>
          <Button onClick={handleEdit} 
          sx={{
            '&:hover': {
              backgroundColor: colors.greenAccent[700], // Change to redAccent on hover
            },
          }}>
            <Edit /> Edit
          </Button>
          {isEditing && (
            <Button onClick={handleSave} sx={{
              '&:hover': {
                backgroundColor: colors.greenAccent[500], // Change to redAccent on hover
              },
            }}>
              Save
            </Button>
          )}
          <Button onClick={handleCloseDialog} color="primary" autoFocus
          sx={{
            '&:hover': {
              backgroundColor: colors.redAccent[500], // Change to redAccent on hover
            },
          }}>
            <Delete /> Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Customers;
