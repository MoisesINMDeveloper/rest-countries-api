import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContextProvider } from "../Context";
import Navbar from "../Components/Navbar"
import Home from "../Page/Home"
import CountryInfo from "../Page/CountryInfo"
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:countryName" element={<CountryInfo />} />
        </Routes>
      </ContextProvider>
    </BrowserRouter>
  )
}
