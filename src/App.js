import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/admin/header';
import Sidebar from './components/admin/sidebar';
import Dashboard from './components/admin/dashboard';
import ProductManagement from './components/admin/productManagement';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <div className="container-fluid">
        <Header />
        <div className="row">
          <Sidebar />
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/product-management" element={<ProductManagement />} />
            {/* Thêm các route khác nếu cần */}
            <Route path="/" element={<Dashboard />} /> {/* Trang mặc định */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
