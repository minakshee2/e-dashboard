import './App.css';
import Nav from './components/nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer';
import SignUp from './components/signup';

function App() {
  return (
    <div>
          <BrowserRouter>
          <Nav />
            <Routes>
              <Route path ="/" element={<h1>Product Listing Component</h1> } />
              <Route path ="/add" element={<h1>Add Product Component</h1> } />
              <Route path ="/update" element={<h1>Update Product Component</h1> } />
              <Route path ="/logout" element={<h1>Logout Component</h1> } />
              <Route path ="/profile" element={<h1>User Profile Component</h1> } />
              <Route path ="/signup" element={<SignUp /> } />
            </Routes>
          </BrowserRouter>
        <Footer />
    </div>
  );
}

export default App;
