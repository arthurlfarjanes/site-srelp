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
          <BrowserRouter>
            <Routes>
              {/* ==== ROTA PRINCIPAL ==== */}
              <Route path="/srelp" element={<LandingPage />} />

              {/* ==== ROTA 404 ==== */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </div>
      </MenuContextProvider>
    </>
  );
}

export default App;
