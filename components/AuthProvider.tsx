"use client"
import {  useSessionStorage } from "@/lib/useStorage";
import { createContext, useState, useContext, ReactNode, useEffect, useCallback } from "react";
import FLAGS from "@/FLAGS";
import _ from 'lodash'

const AuthContext = createContext<any>({ auth:{}, setAuth: null });

export const AuthProvider = ({ children }:{ children: ReactNode}) => {
  const [auth, setAuth] = useState({ email:'' });

  // debounced and callback wrapped function to update the users subscriptiuon details in the db
  const updateSubscriptionData = useCallback(
    _.debounce(() => {
      if(!auth?.email){
        console.log('No email found. Skipping user data update...')
        return;
      }
      console.log('Updating user data:', auth)

    }, 1000),
    [auth]
  )



  useEffect(() => {
    if(!auth?.email && FLAGS.dev){
      setAuth(x => ({
        ...x,
        email: 'DevUser95',
        user_id: 1,
      }))
    }

    updateSubscriptionData()
  }, [auth])


  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      <div className="fixed bottom-0 left-0 max-w-screen ">
        <pre style={{fontSize:'.4rem'}}>{JSON.stringify(auth, null, 2)}</pre>
      </div>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);