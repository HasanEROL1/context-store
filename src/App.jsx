import{BrowserRouter , Routes , Route} from "react-router-dom"
import Basket from "./pages/Basket"
import Header from './components/Header';
import Home from "./pages/Home";


const App = () => {
  return (
    <BrowserRouter>
    <Header/>
<Routes>
  <Route path = "/" element = {<Home />} />
  <Route path="/kategori/:category" element={<Home />} />
  <Route path = "/sepet" element = {<Basket />} />
</Routes>


    </BrowserRouter>
  )
   
  
}

export default App