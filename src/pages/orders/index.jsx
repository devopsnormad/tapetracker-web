import React, { useState, useRef } from 'react';
import { Typography, Box, useTheme, Dialog, DialogTitle, DialogContent, DialogActions, Button, IconButton, TextField, Grid, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from '../../theme';
import { Edit, Delete, Print } from '@mui/icons-material';
import { mockOrder } from '../../data/mockData';
import ReactToPrint from "react-to-print";
import Logo from "../../assets/TapeTrackr-logo.png";




const Order = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [selectedOrder, setSelectedOrder] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const componentRef = useRef();

  const columns = [
    { field: 'id', headerName: 'Order ID', flex: 1, },
    { field: 'customerName', headerName: 'Customer Name', flex: 1, },
    {
      field: 'status',
      headerName: 'Status',
      flex: 1,
      renderCell: (params) => (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '10px',
            width: '150px',
            height: '30px',
            backgroundColor: params.value === 'Delivered' ? '#0a7273' :
                             params.value === 'Dispatched' ? '#adff2f' : 
                             params.value === 'Pending' ? '#ffa000' : 
                             'transparent',
          }}
        >
          <Typography>{params.value}</Typography>
        </Box>
      ),
   },
    { field: 'deliveryDate', headerName: 'Delivery Date', flex: 1, },
    {
      field: 'view',
      headerName: 'View',
      width: 100,
      renderCell: (params) => (
        <Button onClick={() => {
          setSelectedOrder({ ...params.row });
          setOpenDialog(true);
        }}
          color="secondary"
          variant="contained"
          sx={{ marginRight: "30px" }}>
          View
        </Button>
      ),
    },
  ];

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setIsEditing(false);
  };

  const handlePrint = () => {

    console.log('Printing order:', selectedOrder);
  };


  return (
    <Box m="20px">
      <Typography variant="h4">Order Management</Typography>
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
          rows={mockOrder}
          columns={columns}
          pageSize={5}
          components={{ Toolbar: GridToolbar }}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
          sx={{
             "& .delivered": {
               backgroundColor: 'green',
             },
             "& .dispatched": {
               backgroundColor: '#adff2f', // Lemon green
             },
             "& .pending": {
               backgroundColor: '#ffa000', // Amber
             },
          }}
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

        <DialogContent sx={{ display: "flex", flexDirection: "column", gap: "30px", marginTop: "20px" }}>
          <OrderDetails ref={componentRef} order={selectedOrder} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}
            sx={{
              '&:hover': {
                backgroundColor: colors.blueAccent[500], 
              },
            }}>
            Close
          </Button>
          <ReactToPrint
            trigger={() => <Button color="primary" startIcon={<Print />}>Print</Button>}
            content={() => componentRef.current}
          />
          <Button onClick={handleCloseDialog} color="primary" autoFocus
            sx={{
              '&:hover': {
                backgroundColor: colors.redAccent[500], 
              },
            }}>
            <Delete /> Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

const OrderDetails = React.forwardRef((props, ref) => {
  const { order } = props;

  return (
    <div ref={ref}>
      <Box display="flex" flexDirection="column" alignItems="flexStart" gap={2} marginTop={2} marginLeft={4}>
        <img src={Logo} alt="Logo" style={{ width: '100px', height: 'auto' }} />
        <Typography variant="h3" style={{ fontWeight: 'bold' }}>Order Details</Typography>
        <Box display="flex" flexDirection="column" alignItems="flexStart" gap={4}>
          <Box display='flex' gap={1}>
            <Typography style={{ fontWeight: 'bold' }}>Order ID:</Typography>
            <Typography>{order.id}</Typography>
          </Box>
          <Box display='flex' gap={1}>
            <Typography style={{ fontWeight: 'bold' }}>Customer Name:</Typography>
            <Typography>{order.customerName}</Typography>
          </Box>
          <Box display='flex' gap={1}>
            <Typography style={{ fontWeight: 'bold' }}>Status:</Typography>
            <Typography>{order.status}</Typography>
          </Box>
          <Box display='flex' gap={1}>
            <Typography style={{ fontWeight: 'bold' }}>Delivery Date:</Typography>
            <Typography>{order.deliveryDate}</Typography>
          </Box>

        </Box>
      </Box>
    </div>
  );
});


export default Order;
