import Home from "./routers/Home"
import Detail from "./routers/Detail"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/Detail" Component={Detail} />
      </Routes>
    </Router>

    // <Home/>

    
  )
}

export default App;
