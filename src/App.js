import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from "./stranice/Login";
import Navigacija from "./komponente/Navigacija";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Pocetna from "./stranice/Pocetna";
import Onama from "./stranice/Onama";
import Kontakt from "./stranice/Kontakt";

function App() {
  return (
   <>
       <BrowserRouter>
           <Navigacija />
           <Routes>
               <Route path="/" element={<Login />} />
               <Route path="/pocetna" element={<Pocetna />} />
               <Route path="/onama" element={<Onama />} />
               <Route path="/kontakt" element={<Kontakt />} />
           </Routes>
       </BrowserRouter>
   </>
  );
}

export default App;
