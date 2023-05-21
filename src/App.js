import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  HashRouter as Router,
  Route,
  Routes 
} from "react-router-dom";

function App() {
  const user = false;
  return (
    <Router>

      <TopBar />

      <Routes>

        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/Write" element={<Write />} />
        <Route path="/Single" element={<Single />} />

      </Routes>
    </Router>
  );
}

export default App;
