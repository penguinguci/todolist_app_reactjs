// import { useState } from 'react'
import reactLogo from '../views/react.svg'
import viteLogo from '/vite.svg'
import '../styles/global.scss'
import './App.scss'
import MyComponent from './Example/MyComponent'
import ListToDo from './Todos/ListToDo'
import { ToastContainer, toast } from 'react-toastify';
import Nav from './Nav/Nav.'
import Home from './Example/Home'
import { BrowserRouter, Routes, Route } from "react-router";
import ListUser from './Users/ListUser'

/**
 * 2 components: class component / function component (function, arrow)
 */


function App() {
  return (
    <>
      <BrowserRouter>
        <Nav/>
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
          
        </div>
        {/* <MyComponent/> */}
        {/* <ListToDo/> */}

        <Routes>
          <Route path='/' exact index element={<Home />} />

          <Route path='/todo' element={<ListToDo />}/>

          <Route path="/about" element={<MyComponent />} />

          <Route path="/users" element={<ListUser />} />
        </Routes>

        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            // transition={Bounce}
        />

    </BrowserRouter>
    </>
  )
}

export default App
