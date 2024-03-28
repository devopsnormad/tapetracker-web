import React, { useState } from 'react';
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import HourglassTop from '@mui/icons-material/HourglassTop';
import Person2Icon from '@mui/icons-material/Person2';
import StraightenIcon from '@mui/icons-material/Straighten';
import Header from "../../components/Header";
import StatCard from "../../components/StatCard";
import GreetingsCard from "../../components/GreetingsCard";
import Seamstress from "../../assets/Seamstress.svg"
import LineChart from "../../components/LineChart"





const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selectedTimeRange, setSelectedTimeRange] = useState("week");

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

       
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 10"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          borderRadius="24px"
          height="290px"
        >
          <GreetingsCard
            title="Welcome Back!"
            subtitle="Tonze"
            // icon={
            //   <EmailIcon
            //     sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
            //   />
            // }
            image={Seamstress}
          />
        </Box>
        {/* Stats Cards */}
        {/* Stat Card Group One */}
        <Box display="flex"
        flexDirection="column"
        gap="10px">
          {/* Stat Card One */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="24px"
        >
          <StatCard
            title="12,361"
            subtitle="Customers"
            progress="0.75"
            increase="+14%"
            icon={
              <Person2Icon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        {/* Stat Card Two */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="24px"
        >
          <StatCard
            title="431,225"
            subtitle="Recent Measurements"
            progress="0.50"
            increase="+21%"
            icon={
              <StraightenIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        </Box>

        {/* Stat Card Group Two */}
        <Box display="flex"
        flexDirection="column"
        gap="10px">
          {/* Stat Card Three */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="24px"
        >
          <StatCard
            title="12,361"
            subtitle="Pending Orders"
            progress="0.75"
            increase="+14%"
            icon={
              <HourglassTop
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        {/* Stat Card Four */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="24px"
        >
          <StatCard
            title="431,225"
            subtitle="Upcoming Appointments"
            progress="0.50"
            increase="+21%"
            icon={
              <AccessAlarmIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        </Box>

        {/* ROW 3 */}
        {/* Line Chart */}
    <Box
      gridColumn="span 12"
      gridRow="span 3"
      backgroundColor={colors.primary[400]}
      padding="30px"
      marginTop="150px"
      borderRadius="24px"
      height="380px"
    >
      <Typography
        variant="h5"
        fontWeight="600"
        sx={{ marginBottom: "15px" }}
      >
        Clothes Sewn Trend
      </Typography>
      <Box display="flex" justifyContent="flex-end">
          <Button onClick={() => setSelectedTimeRange("week")} 
           sx={{
            "&:hover": {
              backgroundColor: colors.greenAccent[500],
              
            },
          }}>Week</Button>
          <Button onClick={() => setSelectedTimeRange("month")}
          sx={{
            "&:hover": {
              backgroundColor: colors.greenAccent[500],
              
            },
          }}>Month</Button>
          <Button onClick={() => setSelectedTimeRange("year")}
          sx={{
            "&:hover": {
              backgroundColor: colors.greenAccent[500],
              
            },
          }}>Year</Button>
        </Box>
      <Box gridColumn="span 12" gridRow="span 3">
        <LineChart timeRange={selectedTimeRange} width="300px"/>
      </Box>
     
    </Box>

       
      </Box>
    </Box>
  );
};

export default Dashboard;