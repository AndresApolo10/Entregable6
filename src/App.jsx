import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/routes/Home'
import Login from './components/routes/Login'
import ProductDetail from './components/routes/ProductDetail'
import Purchases from './components/routes/Purchases'
import Header from './components/shared/Header'
import axios from 'axios'
import ProtectedRoutes from './components/routes/ProtectedRoutes'
import Cart from './components/routes/Cart'
import { getAllProducts } from './store/slices/products.slice'
import { useDispatch } from 'react-redux'

function App() {

  // useEffect(() => {
  //   const URL='https://ecommerce-api-react.herokuapp.com/api/v1/users'
  //   const obj = {
  //     firstName: 'Andres',
  //     lastName: 'Apolo',
  //     email: 'andresapolo@hotmail.com',
  //     password: 'pass1234',
  //     phone: '1234567890',
  //     role: 'admin'
  //   }
  //   axios.post(URL, obj)
  //     .then(res => console.log(res.data))
  //     .catch(err => console.log(err))
  // }, [])

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])

  return (
    <div className='app'>
      <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/product/:id' element={<ProductDetail />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/purchases' element={<Purchases />} />
          <Route path='/cart' element={<Cart />} />
        </Route>
    </Routes>
    </div>
  )
}

export default App
