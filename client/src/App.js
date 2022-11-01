import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import NavMenu from './components/NavMenu/NavMenu';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import PartnerLogin from './pages/PartnerLogin';
// import Education from './pages/Education/Education';
import PartnerInventory from './pages/PartnerInventory';
import Cart from './components/Cart/Cart.js';
import CustomerPage from './pages/CustomerPage';
import { StoreProvider } from './utils/GlobalState.js';
import Locator from './components/Locator/index'
import NoMatch from './components/NoMatch'




const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  document.title = 'Too Good To Waste';

  return (
    <ApolloProvider client={client}>
      <Router>
        <StoreProvider>
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

                <Cart />
              </header>

              <main>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="*" element={<NoMatch />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/locator" element={<Locator />} />
                  <Route path="/partnerlogin" element={<PartnerLogin />} />
                  <Route path="/education" element={<CustomerPage />} />
                  <Route path="/CustomerPage" element={<CustomerPage />} />
                  <Route path="/partnerInventory" element={<PartnerInventory />} />
                </Routes>
              </main>
            </Box>
          </ChakraProvider>
        </StoreProvider>
      </Router>
    </ApolloProvider>
  );
}

export default App;
