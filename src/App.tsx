
import './App.css'
import CustomerReviews from './components/CustomerReviews'
import FaqNSocialMedia from './components/FaqNSocialMedia'
import Footer from './components/Footer'
import ProductInfo from './components/ProductInfo'
import ProductView from './components/ProductView'

function App() {

  return (
    <div className=" bg-white">

      <ProductView />
      <ProductInfo />
      <CustomerReviews />
      <FaqNSocialMedia />
      <Footer />

    </div>
  )
}

export default App
