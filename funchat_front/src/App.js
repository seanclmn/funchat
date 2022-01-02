import React,{useEffect,useState} from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Main from './pages/Main';
import SignUp from './components/signup/SignUp';
import SignIn from './components/signin/SignIn'

import firebase from 'firebase/app'
import "firebase/auth"
import "firebase/firestore"
import { collections, doc, setDoc} from "firebase/firestore"
import { auth } from './Firebase';
import AuthProvider from './components/auth/Auth';
import PrivateRoute from './components/privateroute/PrivateRoute';


function App() {

  const [currentUser,setCurrentUser] = useState(null)

  useEffect(()=>{
      auth.onAuthStateChanged(setCurrentUser)
  },[])

  return (
    <AuthProvider>      
      <Router>
          <Routes>
            <Route exact path= '/'
              element={
                <PrivateRoute>
                  <Main/>
                </PrivateRoute>
          
              }
            />
            <Route exact path='/signin' element={<SignIn/>}/>
            <Route exact path='/signup' element={<SignUp/>}/>
          </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
