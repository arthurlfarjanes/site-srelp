// CSS
import "./App.css";

// React
import { MenuContextProvider } from "./context/MenuContext/MenuContext";

// Pages
import LandingPage from "./pages/LandingPage/LandingPage";

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
