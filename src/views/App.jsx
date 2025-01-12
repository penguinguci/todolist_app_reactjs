// import { useState } from 'react'
import reactLogo from '../views/react.svg'
import viteLogo from '/vite.svg'
import '../styles/global.scss'
import './App.scss'
// import MyComponent from './Example/MyComponent'
import ListToDo from './Todos/ListToDo'
import { ToastContainer, toast } from 'react-toastify';

/**
 * 2 components: class component / function component (function, arrow)
 */


function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <p>Simple TODO Apps with React.js (Penguin)</p>
      </div>
      {/* <MyComponent/> */}
      <ListToDo/>

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
    </>
  )
}

export default App
