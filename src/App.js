import logo from './logo.svg';
import './App.css';
import Users from "./component/Users";
import Navbar from "./component/Navbar";
import CreateUser from './component/CreateUser'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import UsersDetails from "./component/UsersDetails";

function App() {
    return (
        <Router>
            <div className="container">
                <Navbar/>
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Users/>}/>
                        <Route path="/create" element={<CreateUser/>}/>
                        <Route path="/users/:id" element={<UsersDetails/>} />
                    </Routes>
                </div>
            </div>
        </Router>

    );
}

export default App;
