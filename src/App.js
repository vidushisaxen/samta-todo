import { Route, Routes } from "react-router-dom";
import SplashScreen from "./SplashScreen";
import Mainapp from "./Mainapp";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<SplashScreen/>}/>
      <Route path="/mainapp" element={<Mainapp/>}/>
    </Routes>
   
    </>
  );
}

export default App;
