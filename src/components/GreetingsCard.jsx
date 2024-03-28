import React, { useState, useEffect } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";

const GreetingsCard = ({ title, subtitle, image, isCollapsed }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box width="auto" height="250px" m="0 20px">
      <Box display="flex" flexDirection="row" gap="20px">
        <Box display="flex" flexDirection="column" gap="2px">
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: colors.gray[100] }}
          >
            {title}
          </Typography>
          <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
            {subtitle}
          </Typography>
          <Typography variant="h5" sx={{ color: colors.gray[100], fontWeight:"bold" }}>
            {currentTime.toLocaleTimeString()}
          </Typography>
        </Box>
        <Box
  style={{
    marginLeft: isCollapsed ? "120px" : undefined,
    marginRight: !isCollapsed ? "-60px" : undefined,
  }}
>
  <img
    src={image}
    alt="Seamstress"
    style={{
      width: '80%',
      height: 'auto',
      display: 'block',
      margin: "10px 0 30px",
    }}
  />
</Box>
      </Box>
    </Box>
  );
};

export default GreetingsCard;
