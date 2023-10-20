"use client"
import {  useSessionStorage } from "@/lib/useStorage";
import { createContext, useState, useContext, ReactNode, useEffect } from "react";
import FLAGS from "@/FLAGS";

const AuthContext = createContext<any>({ auth:{}, setAuth: null });

export const AuthProvider = ({ children }:{ children: ReactNode}) => {
  const [auth, setAuth] = useState({ email:'' });

  useEffect(() => {
    if(!auth?.email && FLAGS.dev){
      setAuth(x => ({
        ...x,
        email: 'DevUser95',
        user_id: 1,
      }))
    }
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