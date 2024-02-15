import './App.css';
import { BrowserRouter,Routes,Router ,Route } from 'react-router-dom';
import Homepage from './Page/Homepage';
import Login from './Page/Login/Login';
import { createContext, useState } from 'react';
import ltl from "./style/ltr.css";
import rtl from "./style/rtl.css";
import Verify from './Page/Verify/Verify';
import { SingUp } from './Page/SingUp/SingUp';
import AllProduct from './Page/AllProduct';
import PrivateServes from './Page/PrivateServes';
import ProductDeteils from './Page/ProductDeteils';
import { ServesDetiels } from './Page/ServesDetiels';
import BookPage from './Page/Booking/BookPage';
import MainBook2 from './Page/Booking/Main Booking/Booking two/MainBook2';
import PhoneNumber from './Page/phonenumber/PhoneNumber';
import './style/mediaquery.css'
export const ContextLang = createContext();

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  return (
    <ContextLang.Provider value={{ selectedLanguage, setSelectedLanguage }}>
      <div className={selectedLanguage === "ar" ? "App rtl" : "App ltr"}>
              <BrowserRouter >
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/allproduct" element={<AllProduct />} />
              <Route path="/peivateserves" element={<PrivateServes />} />
              <Route path="/productdeteils" element={<ProductDeteils />} />
              <Route path="/serves_details" element={<ServesDetiels />} />
              <Route path="/booking" element={<BookPage />} />
              <Route path="/booking_step2" element={<MainBook2 />} />
              <Route path="/login" element={<Login /> } />
              <Route path="/singup" element={<SingUp /> } />
              <Route path="/verify" element={<Verify /> } />
              <Route path="/phone" element={<PhoneNumber /> } />


            </Routes>

          </BrowserRouter>
    </div>
    </ContextLang.Provider>

  );
}

export default App;
