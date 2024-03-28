import React, { useState } from 'react'
import './App.css';
import { ColorModeContext, useMode } from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { Topbar, Sidebar } from './pages/global'
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard'
import Measurement from './pages/measurements'

import Support from './pages/support'
import Signin from './pages/signin'
import Signup from './pages/signup'
import Customers from './pages/customers'
import Appointment from './pages/appointment'
import Inventory from './pages/inventory'
import Order from './pages/orders'



function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/measurement" element={<Measurement />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/appointment" element={<Appointment />} />
              <Route path="/order" element={<Order />} />
              <Route path="/inventory" element={<Inventory />} />
              <Route path="/support" element={<Support />} />
              {/* <Route path="/signin" element={<Signin />} /> */}
              {/* <Route path="/signup" element={<Signup />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;