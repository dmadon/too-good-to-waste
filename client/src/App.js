import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Box, Divider } from '@chakra-ui/react';
import NavMenu from './components/NavMenu/NavMenu';
import PartnerInventory from './pages/PartnerInventory';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import PartnerLogin from './pages/PartnerLogin';
import CustomerPage from './pages/CustomerPage';


function App() {
  document.title = 'Too Good To Waste';

  return (
    <div>
      <Router>
        <ChakraProvider>
        <Box minH='1500px' bgColor='#F5EFE6'>
          <header>
            <NavMenu />
                        
            <Box display="flex" justifyContent="center">          
              <Link id="home" to="/" className="blk-let">TOO</Link>
              <Link id="home" to="/" className="csv-let">Good</Link>
              <Link id="home" to="/" className="blk-let">TO</Link>
              <Link id="home" to="/" className="csv-let">Waste</Link>   
            </Box>        
          </header>      

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
        </Box>
        </ChakraProvider>
      </Router>
    </div>
  );
}

export default App;
