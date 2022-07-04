import {Routes, Route } from 'react-router-dom'
import HomeScreen from '../pages/HomeScreen'
import SignUp from '../pages/SignUp';
import LoginScreen from '../pages/LoginScreen';
import ErrorScreen from '../pages/ErrorScreen';
import CategoryScreen from '../pages/CategoryScreen';
const RoutesApp = () => {
  return (
    <Routes>
        <Route path= "/" element={<HomeScreen/>} />
        <Route path= "/login" element={<LoginScreen/>} />
        <Route path= "/singup" element={<SignUp/>} />
        <Route path= "/category/:id" element={<CategoryScreen/>} />
        <Route path= "*" element={<ErrorScreen/>} />
    </Routes>
  )
}
export default RoutesApp;