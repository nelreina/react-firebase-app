import React, { useContext } from 'react'
import { StyledFirebaseAuth } from "react-firebaseui";
import { uiConfig, firebaseAuth } from '../firebase';
import { Redirect } from 'react-router';
import { AuthContext } from '../Auth';
const Landing = () => {
  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div>
      <h1>Landing</h1>

      <StyledFirebaseAuth 
        uiConfig={uiConfig}
        firebaseAuth = {firebaseAuth}
        
      />
    </div>
  )
}

export default Landing
