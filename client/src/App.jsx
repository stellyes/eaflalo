import React from 'react';
import Container from 'react-bootstrap/Container';
import { useLocation, Outlet } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import Header from './components/Header';
import Footer from './components/Footer';

const client = new ApolloClient({
  cache: new InMemoryCache(),
});

const App = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <ApolloProvider client={client}>
      {isHome ?
        <Container>
          <Outlet />
          <Footer />
        </Container> :
        <Container>
          <Header />
          <Outlet />
          <Footer />
        </Container>
      }
    </ApolloProvider>
  );
};

export default App;