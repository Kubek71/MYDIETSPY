import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { GlobalStyles } from "./Components/Styles/Global";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Diary from "./Components/Diary";
import Recipes from "./Components/Recipes"
import HomePage from "./Components/HomePage";
import LandingPage from "./Components/LandingPage";
import { Container } from "./Components/Styles/Container";
import { useState } from "react";

import { auth } from './Helpers/FirebaseConfig'
import { onAuthStateChanged } from 'firebase/auth';


function App() {
    // array of choosed products and servings 

  const [isMealSubmited, setIsMealSubmited] = useState(false);
  const [headerHeight, setHeaderHeight] = useState();
  const [authState, setAuthState] = useState(false);


  onAuthStateChanged(auth, (user) => {
    user? setAuthState(true): setAuthState(false);
  });

  return (
    <div className="App">
      <GlobalStyles/>
      {
        authState === false && 
        <LandingPage/>
      }
      {
        authState === true &&
        <BrowserRouter>
        <Header setHeaderHeight={setHeaderHeight} headerHeight={headerHeight}/>
          <Routes>
            <Route path="/Diary" element={<Diary isMealSubmited={isMealSubmited}/>}/>
            <Route path="/Recipes" element={<Recipes/>}/>
            <Route path="/" element={<HomePage setIsMealSubmited={setIsMealSubmited} isMealSubmited={isMealSubmited}/>} />
          </Routes>
        <Footer/>
      </BrowserRouter>
      }
    </div>
  );
}

export default App;
