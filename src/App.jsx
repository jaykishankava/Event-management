import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Add from './Pages/Add'
import View from './Pages/View'
import Edit from './Pages/Edit'
import Register from './Pages/Register'
import Login from './pages/Login'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
          <Route path='/add' element={<Add/>}/>
          <Route path='/view' element={<View/>}/>
          <Route path='/edit' element={<Edit/>}/>
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
