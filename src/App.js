import logo from './logo.svg';
import './App.css';
import SignUp from './components/forms/Signup/index';
import Login from './components/forms/Login/index';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './components/DashboadHeader/index'
import ManageProducts from './pages/Products/index'
import ManageOrders from './pages/Orders/index'
import Profile from './pages/Profile/index'
import SideBar from './components/Sidebar';
import sidebar_menu from './constants/sidebar_menu';
import Protected from './components/privateRoute';
import {toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <BrowserRouter>
      <ToastContainer/>
        <div className='dashboard-container'>
          <SideBar menu={sidebar_menu} />
          <div className='dashboard-body'>
            <Routes>
              <Route path='/sellerSignup' element={<SignUp />} />
              <Route path='/sellerLogin' element={<Login />} />
              <Route exact path='/' element={<Protected Component ={Dashboard} />} />
              <Route exact path='/manageProducts' element={<Protected Component ={ManageProducts} />} />
              <Route exact path='/manageOrders' element={<Protected Component ={ManageOrders} />} />
              <Route exact path='/sellerProfile' element = {<Protected Component = {Profile}/> }/>

            </Routes>
          </div>

        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
