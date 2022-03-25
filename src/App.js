import { useEffect, useState } from 'react';
import Header from './components/header/Header';
import Home from './page/home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Review from './page/review/Review';
import Shop from './page/shop/Shop';

import './App.css';


function App() {



  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])

  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  const addToCardHandler = id => {
    const dataById = products.find(item => item.id === id)

    // set localStorage 
    const prevLocalStorage = localStorage.getItem('cartItems')
    let setItems = JSON.parse(prevLocalStorage) || {}

    let quantity = setItems[id]
    if (quantity) {
      const newQuantity = quantity + 1
      setItems[id] = newQuantity
      dataById.quantity = newQuantity

    } else {
      setItems[id] = 1
      dataById.quantity = 1
    }
    localStorage.setItem('cartItems', JSON.stringify(setItems))

    let isCart = !!(cart.find(item => item.id === id))

    isCart ? setCart([...cart]) : setCart([...cart, dataById])
    console.log(cart)
  }

  const allClearHandler = () => {
    localStorage.removeItem('cartItems')
    setCart([])
  }
  const deleteHandler = id => {
    let afterDeleted = cart.filter(item => item.id !== id)
    setCart(afterDeleted)

    let cartItemStorage = JSON.parse(localStorage.getItem('cartItems'))
    delete cartItemStorage[id]
    localStorage.setItem('cartItems', JSON.stringify(cartItemStorage))



  }

  // useEffect(()=>{console.log(cart)}, [cart])
  useEffect(() => {
    const getLocal = JSON.parse(localStorage.getItem('cartItems'))
    let localStorageValue = []
    if (getLocal) {
      localStorageValue = getLocal
    }

    let localProduct = []
    // find product by id 
    if (products.length) {
      let findProduct = (id) => {
        const cartProduct = products.find(item => item.id === id)
        cartProduct.quantity = localStorageValue[id]
        localProduct = [...localProduct, cartProduct]
        
        setCart(localProduct)
      }
      Object.keys(localStorageValue).map(items => findProduct(items))
    }
  }, [products])



  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop
          products={products}
          addToCardHandler={addToCardHandler}
          cart={cart}
          allClearHandler={allClearHandler}
        />} />
        <Route path='/review' element={<Review
          cart={cart}
          allClearHandler={allClearHandler}
          deleteHandler={deleteHandler}
        />} />
      </Routes>

    </BrowserRouter>




  );
}

export default App;
