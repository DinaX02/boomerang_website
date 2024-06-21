import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomepageGeral from "./pages/HomePageWeb/HomePageWeb";
import AboutUs from "./pages/AboutUs";
import PrivacyPolicy from "./pages/PoliticadePrivacidade";
import PoliticadeCookies from "./pages/PoliticadeCookies";
import TermoseCondicoes from "./pages/TermoseCondicoes";

import './index.css';

function App() {
  return (  
    <div>
<BrowserRouter>
      <Routes>
        <Route path="/" element={<HomepageGeral/>}></Route>
        <Route path="/sobre-nos" element={<AboutUs/>}></Route>
        <Route path="/politica-de-privacidade" element={<PrivacyPolicy/>}></Route>
        <Route path="/politica-cookies" element={<PoliticadeCookies/>}></Route>
        <Route path="/termos-e-condicoes" element={<TermoseCondicoes/>}></Route>
      </Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
