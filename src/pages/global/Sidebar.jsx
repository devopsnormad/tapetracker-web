import React, { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import {
  CiGrid41,
  CiRuler,
  CiMemoPad ,
  CiLogout,
  CiCircleQuestion,
  CiMenuBurger,
  CiCalendarDate,
  CiFolderOn,
  CiUser,
  CiDeliveryTruck
} from "react-icons/ci";
import Logo from "../../assets/TapeTrackr-logo.png";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import { Box, Typography, IconButton, useTheme, Tooltip  } from "@mui/material";

const Item = ({ title, to, icon, selected, setSelected, isCollapsed }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <>
      {isCollapsed ? (
        <Tooltip title={title} placement="right" arrow>
          <MenuItem
            active={selected === title}
            onClick={() => setSelected(title)}
            icon={icon}
          >
            <Typography>{title}</Typography>
            <Link to={to} />
          </MenuItem>
        </Tooltip>
      ) : (
        <MenuItem
          active={selected === title}
          onClick={() => setSelected(title)}
          icon={icon}
        >
          <Typography>{title}</Typography>
          <Link to={to} />
        </MenuItem>
      )}
    </>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  return (
    <Box
    sx={{
      "& .pro-sidebar-inner": {
        background: `${colors.primary[400]} !important`,
      },
      "& .pro-icon-wrapper": {
        backgroundColor: "transparent !important",
      },
      "& .pro-inner-item": {
        padding: "5px 35px 5px 20px !important",
      },
      "& .pro-inner-item:hover": {
        color: "#0A7273 !important",
      },
      "& .pro-menu-item.active": {
        color: "#0A7273 !important",
      },
    }}
  >
    <ProSidebar collapsed={isCollapsed}>
      <Menu iconShape="square">
        {/* LOGO AND MENU ICON */}
        <MenuItem
          onClick={() => setIsCollapsed(!isCollapsed)}
          icon={
            isCollapsed ? (
              <CiMenuBurger className="text-green-700" />
            ) : undefined
          }
          style={{
            margin: isCollapsed ? "0 0 0 0" : "0px 0 20px 0",
            color: colors.greenAccent[900],
          }}
        >
          {!isCollapsed && (
            <div className="flex justify-between items-center ml-14 mb-2">
              <img src={Logo} alt="Tape Trackr Logo" className="w-24" />
              <div onClick={() => setIsCollapsed(!isCollapsed)}>
                <CiMenuBurger className="text-green-700" />
              </div>
            </div>
          )}
        </MenuItem>
        {/* Render the logo only when the sidebar is collapsed */}
        {isCollapsed && (
          <div className="flex items-center justify-center">
            <img src={Logo} alt="Tape Trackr Logo" className="w-14" />
          </div>
        )}

<Box paddingLeft={isCollapsed ? undefined : "10%"} marginTop="5px">
  <Item
    title="Dashboard"
    to="/"
    icon={<CiGrid41 className="text-2xl"/>}
    selected={selected}
    setSelected={setSelected}
  />
  <Item
    title="Measurement"
    to="/measurement"
    icon={<CiRuler className="text-2xl"/>}
    selected={selected}
    setSelected={setSelected}
  />
  <Item
    title="Customers"
    to="/customers"
    icon={<CiUser  className="text-2xl"/>}
    selected={selected}
    setSelected={setSelected}
  />
   <Item
    title="Appointment"
    to="/appointment"
    icon={<CiCalendarDate className="text-2xl"/>}
    selected={selected}
    setSelected={setSelected}
  />

   <Item
    title="Order Management"
    to="/order"
    icon={<CiDeliveryTruck className="text-2xl"/>}
    selected={selected}
    setSelected={setSelected}
  />
   <Item
    title="Inventory"
    to="/inventory"
    icon={<CiFolderOn className="text-2xl"/>}
    selected={selected}
    setSelected={setSelected}
  />
  
  <Box marginTop="390px">
    <Item
      title="Support"
      to="/support"
      icon={<CiCircleQuestion className="text-2xl" />}
      selected={selected}
      setSelected={setSelected}
    />
    <Item
      title="Logout"
      to="/signin"
      icon={<CiLogout className="text-2xl" />}
      selected={selected}
      setSelected={setSelected}
    />
  </Box>
</Box>

      </Menu>
    </ProSidebar>
  </Box>
  );
};

export default Sidebar;
