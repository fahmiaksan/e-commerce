import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar.jsx"
import { CartPage, HomePage, CategoryPage } from "./pages/Index.jsx";
import Footer from './components/Footer/Footer';
import store from './store/Store.jsx';
import { Provider } from 'react-redux';
function App() {
  return (
    <div className='app font-poppins'>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/category/:id' element={<CategoryPage />} />
            <Route path='/cart' element={<CartPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App
