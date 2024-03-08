import {BrowserRouter, Route, Routes} from "react-router-dom";
import Forms from "./pages/Form";
import RoomPage from "./pages/Room";

function App() {
  return(    
    <div>
      <BrowserRouter>
         <Routes>
            <Route path="/" element={< Forms /> }></Route>
            <Route path="/room/:roomId" element={ <RoomPage /> }></Route>
         </Routes>
      </ BrowserRouter>
    </div>
  )
}

export default App
