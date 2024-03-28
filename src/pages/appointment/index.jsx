import React, { useState } from 'react';
import { Box, Typography, useTheme, List, ListItem, ListItemText } from '@mui/material';
import FullCalendar from "@fullcalendar/react";
import { formatDate } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { tokens } from '../../theme';
import Header from '../../components/Header';
import AppointmentDialog from '../../components/AppointmentDialog';
import ConfirmDialog from '../../components/ConfirmDialog'; 

const Appointment = () => {
 const theme = useTheme();
 const colors = tokens(theme.palette.mode);
 const [currentEvents, setCurrentEvents] = useState([]);
 const [dialogOpen, setDialogOpen] = useState(false);
 const [selectedDate, setSelectedDate] = useState(null);
 const [confirmOpen, setConfirmOpen] = useState(false);
 const [eventToDelete, setEventToDelete] = useState(null);

 const handleOpenDialog = (selected) => {
    setSelectedDate(selected);
    setDialogOpen(true);
 };

 const handleCloseDialog = () => {
    setDialogOpen(false);
 };

 const handleAddAppointment = (appointment) => {
    const calendarApi = selectedDate.view.calendar;
    calendarApi.unselect();

    if (appointment.title) {
      calendarApi.addEvent({
        id: `${selectedDate.dateStr}-${appointment.title}`,
        title: appointment.title,
        start: selectedDate.startStr,
        end: selectedDate.endStr,
        allDay: selectedDate.allDay,
        extendedProps: {
          customerName: appointment.customerName,
        },
      });
    }
    handleCloseDialog();
 };

 const handleDateClick = (selected) => {
    handleOpenDialog(selected);
 };

 const handleOpenConfirm = (event) => {
    setEventToDelete(event);
    setConfirmOpen(true);
 };

 const handleCloseConfirm = () => {
    setConfirmOpen(false);
 };

 const handleConfirmDelete = () => {
    if (eventToDelete) {
      eventToDelete.event.remove();
    }
    handleCloseConfirm();
 };

 const handleEventClick = (selected) => {
    handleOpenConfirm(selected);
 };

 return (
    <Box m="20px">
      <Header title="Calendar" subtitle="Schedule and manage appointments with clients. Set reminders, reschedule, and cancel appointments." />
      <Box display="flex" justifyContent="space-between">
        {/* CALENDAR SIDEBAR */}
        <Box
          flex="1 1 20%"
          backgroundColor={colors.primary[400]}
          p="15px"
          borderRadius="4px"
        >
          <Typography variant="h5">Events</Typography>
          <List>
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                 backgroundColor: colors.greenAccent[500],
                 margin: "10px 0",
                 borderRadius: "2px",
                }}
              >
                <ListItemText
                 primary={event.title}
                 secondary={
                    <Typography>
                      {formatDate(event.start, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })} - {event.extendedProps.customerName}
                    </Typography>
                 }
                />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* CALENDAR */}
        <Box flex="1 1 100%" ml="15px">
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={[
              {
                id: "12315",
                title: "All-day event",
                date: "2022-09-14",
              },
              {
                id: "5123",
                title: "Timed event",
                date: "2022-09-28",
              },
            ]}
          />
        </Box>
      </Box>
      <AppointmentDialog
        open={dialogOpen}
        handleClose={handleCloseDialog}
        handleAdd={handleAddAppointment}
      />
      <ConfirmDialog
        open={confirmOpen}
        handleClose={handleCloseConfirm}
        onConfirm={handleConfirmDelete}
        title="Delete Event"
        description={`Are you sure you want to delete the event '${eventToDelete?.event.title}'?`}
      />
    </Box>
 );
};

export default Appointment;
