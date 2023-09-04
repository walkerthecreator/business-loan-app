import './App.css'
import Customer from './pages/Customer'
import Hero from './pages/Hero'
import Review from './pages/Review'
import { Route , Routes } from 'react-router-dom'
import Success from './pages/Success'

function App() {

  return (
    <>
    <div id='App' className='font-inter'>

        <Routes>
            <Route path='/'  element={ <Hero/> }></Route>
            <Route path='/businessDetails'  element={<Customer />}></Route>
            <Route path='/review' element={ <Review/> }></Route>
            <Route path='/success' element={<Success />}></Route>
        </Routes>
        {/* <Customer/>
        <Review></Review> */}
        </div>
    </>
  )
}

export default App
