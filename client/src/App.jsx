import './App.css'
import Customer from './pages/Customer'
import Hero from './pages/Hero'
import Review from './pages/Review'
import { Outlet, Route , Routes } from 'react-router-dom'

function App() {

  return (
    <>
        <Routes>
            <Route path='/'  element={ <Hero/> }></Route>
            <Route path='/businessDetails'  element={<Customer />}></Route>
            <Route path='/review' element={ <Review/> }></Route>
        </Routes>
        {/* <Customer/>
        <Review></Review> */}
    </>
  )
}

export default App
