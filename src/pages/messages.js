import React, { useState, useEffect } from 'react';

import Layout from '../components/authLayout';
import { useFirebase } from "../firebase/firebase-context"

const LandingPage =  () => {
  const [user, setUser] = useState([])

  useFirebase( firebase => {
    const db = firebase.firestore()
    db.collection("reachouts").get().then(res=>{
      setUser(res.docs.map(msg => msg.data()))
    })
    
  }, [])

  console.log('usr --- ',user)

  return <p>Hello {user.length ? user.length : "there"}</p>
};

export default () => (
  <Layout>
    <LandingPage />
  </Layout>
);