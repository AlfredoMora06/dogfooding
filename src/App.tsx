import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';

function Layout({ children }: { children: React.ReactNode }) {  
  return (
    <>
      <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
        <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <main style={{ padding: '1rem' }}>{children}</main>
    </>
  );
}

function Home() {
  return <h1>Welcome to the Home Page</h1>;
}

function About() {
  return <h1>About / Info Page</h1>;
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;