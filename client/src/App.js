import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import NavMenu from './components/NavMenu/NavMenu';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import PartnerLogin from './pages/PartnerLogin';
import Education from './pages/Education/Education';

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
                {/* <Route path="/locator" element={<Locator />} /> */}
                <Route path="/partnerlogin" element={<PartnerLogin />} />
                <Route path="/education" element={<Education />} />
              </Routes>
            </main>
          </Box>
        </ChakraProvider>
      </Router>
    </div>
  );
}

export default App;
