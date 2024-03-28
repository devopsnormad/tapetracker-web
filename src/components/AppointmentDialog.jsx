import React, { useContext, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material/styles';
import { ColorModeContext, tokens } from '../theme';

const AppointmentDialog = ({ open, handleClose, handleAdd }) => {
 const theme = useTheme();
 const colors = tokens(theme.palette.mode);
 const colorMode = useContext(ColorModeContext);
 const [title, setTitle] = useState('');
 const [deliveryTime, setDeliveryTime] = useState('');
 const [customerName, setCustomerName] = useState('');

 const handleSubmit = () => {
    handleAdd({ title, deliveryTime, customerName });
    handleClose();
 };

 return (
    <Dialog
      open={open}
      onClose={handleClose}
      sx={{
        '& .MuiDialog-paper': {
          backgroundColor: theme.palette.background.default, 
        },
      }}
    >
      <DialogTitle>Add Appointment</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Appointment Title"
          type="text"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Delivery Time"
          type="datetime-local"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          value={deliveryTime}
          onChange={(e) => setDeliveryTime(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Customer Name"
          type="text"
          fullWidth
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
        />
      </DialogContent>
      <DialogActions
        sx={{
          padding: theme.spacing(3), // Add padding to the DialogActions
        }}
      >
        <Button
          onClick={handleClose}
          sx={{
            '&:hover': {
              backgroundColor: colors.redAccent[500], // Change to redAccent on hover
            },
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={handleSubmit}
          sx={{
            '&:hover': {
              backgroundColor: theme.palette.secondary.main,
            },
          }}
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
 );
};

export default AppointmentDialog;
