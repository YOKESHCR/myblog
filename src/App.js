
import './App.css';
import {BrowserRouter as Router, Routes, Link, Route} from 'react-router-dom'
import CreatePost from './pages/CreatePost';
import Home from './pages/Home';
import Login from './pages/Login';
import { useEffect, useState } from 'react'
import { signOut } from 'firebase/auth'
import { auth } from './firebase'

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"))
  
  const signUserOut = () => {
     signOut(auth).then(() => {
      localStorage.setItem("isAuth", false)
      setIsAuth(false)
      window.location.pathname = '/login'
     })
  }

  return (
   <Router>
    <nav>
      <Link to="/"> Home </Link>
      
      {!isAuth ? <Link to="/login"> Login </Link> :
      ( <>
          <Link to="/create"> Create Post </Link>
          <button onClick={signUserOut}> Log Out </button>
        </>
      )}
    </nav>
    <Routes>
      <Route path="/" element={<Home isAuth={isAuth}/>}/>
      <Route path="/createpost" element={<CreatePost isAuth={isAuth}/>}/>
      <Route path="/login" element={<Login setIsAuth={setIsAuth} />}/>
    </Routes>
   </Router>
  );
}

export default App;
