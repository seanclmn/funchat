import React,{useEffect,useState} from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Main from './pages/Main';
import SignUp from './components/signup/SignUp';
import SignIn from './components/signin/SignIn'

import firebase from 'firebase/app'
import "firebase/auth"
import "firebase/firestore"
import { auth } from './Firebase';
import AuthProvider from './components/auth/Auth';
import PrivateRoute from './components/privateroute/PrivateRoute';


function App() {

  console.log(auth.currentUser)

  const [currentUser,setCurrentUser] = useState(null)

  useEffect(()=>{
      auth.onAuthStateChanged(setCurrentUser)
  },[])
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          {/* <PrivateRoute exact path='/' component={Main}/> */}
          <Routes>
            <PrivateRoute exact path='/' component={Main}/>
            <Route exact path='/signin' component={SignIn}/>
            <Route exact path='/signup' component={SignUp}/>
          </Routes>
        </div>


      </Router>
    </AuthProvider>


    // <div className="App">
    // {!auth.currentUser ? <SignIn/>: <Main/>}

    // </div>
  );
}

export default App;
