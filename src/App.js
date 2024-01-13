import "./App.css";
import { Routes,Route ,BrowserRouter} from "react-router-dom";
import { Home } from "./components/Home";

import {Audio} from "./components/Audio";
import {Video} from "./components/Video";
function App() {
  return (
    <div >
       <BrowserRouter>
   
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/audio" element={<Audio/>}/>
    <Route path="/video" element={<Video/>}/>
    
    

   </Routes>
   </BrowserRouter>

    </div>
  
  );
}

export default App;
