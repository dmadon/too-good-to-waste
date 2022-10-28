import React from 'react';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Box, Button, Text } from '@chakra-ui/react';
import NavMenu from './components/NavMenu/NavMenu';
import PartnerInventory from './pages/PartnerInventory';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PartnerLogin from './pages/PartnerLogin';
import CustomerPage from './pages/CustomerPage';


function App() {
  document.title = 'Too Good To Waste';

  return (
    <div>
      <Router>
      <ChakraProvider>
      <Box>
        <NavMenu />
        
        <Link id="home" to="/">
          <Box display="flex" justifyContent="center">          
              <h1 className="blk-let">TOO</h1>
              <h1 className="csv-let">Good</h1>
              <h1 className="blk-let">TO</h1>
              <h1 className="csv-let">Waste</h1>   
          </Box>
        </Link>

      </Box>      

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/locator" element={<PartnerInventory />} />
          <Route path="/partnerlogin" element={<PartnerLogin />} />
          <Route path="/education" element={<CustomerPage />} />
        </Routes>
      </main>

      </ChakraProvider>
      </Router>
    </div>
  );
}

export default App;
