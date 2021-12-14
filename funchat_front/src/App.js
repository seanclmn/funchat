import React,{useEffect,useState} from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import Main from './pages/Main';
import Signup from './components/signup/SignUp';
import SignIn from './components/signin/SignIn'

import firebase from 'firebase/app'
import "firebase/auth"
import "firebase/firestore"
import { auth } from './Firebase';
import AuthProvider from './components/auth/Auth';


function App() {

  console.log(auth.currentUser)

  const [currentUser,setCurrentUser] = useState(null)

  useEffect(()=>{
      auth.onAuthStateChanged(setCurrentUser)
  },[])
  return (
    // <AuthProvider>
    //       <Router>
    //         <div className="App">
    //             {!auth.currentUser ? <SignIn/>: <Main/>}
        
    //         </div>
    //       </Router>
    // </AuthProvider>


    <div className="App">
    {!auth.currentUser ? <SignIn/>: <Main/>}

    </div>
  );
}

export default App;
