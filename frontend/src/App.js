import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './pages/HomeScreen';
import ProductPage from './pages/ProductPage';

const App = () => {
  return (
    <Router>
    <Header />
    <main className="py-3">
      <Container>
      <Route path='/' exact component={HomeScreen} />
      <Route path='/product/:id' component={ProductPage} />
      </Container>
    </main>
     <Footer />
    </Router>
  );
}

export default App;
