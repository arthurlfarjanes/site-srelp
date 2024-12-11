// CSS
import "./App.css";

// React
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MenuContextProvider } from "./context/MenuContext/MenuContext";

// Pages
import LandingPage from "./pages/LandingPage/LandingPage";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <>
      <MenuContextProvider>
        <div className="App">
          <LandingPage />
        </div>
      </MenuContextProvider>
    </>
  );
}

export default App;
