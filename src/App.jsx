import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/Footer/Footer"

const App = () => {
   
  return(
    <>
    <BrowserRouter>
        <Header/>
        <AppRoutes/>
        <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App;