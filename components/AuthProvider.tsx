"use client"
import {  useSessionStorage } from "@/lib/useStorage";
import { createContext, useState, useContext, ReactNode, useEffect, useCallback } from "react";
import FLAGS from "@/FLAGS";
import _ from 'lodash'

export type LoginData = {
  user_email: string;
  password: string;
  role_id: number;
  subscribed:boolean;
}

export type OnboardingResponses = {
  profile?: {
    entityName?: string;
    displayName?: string;
  },
  location?: {
    address?: string;
    state?: string;
    zip?: string;
  },
  labRequirements?: {
    certTypes?: string[];
    licenses?: string[];
  },
}

export type SubData = {
  email?: string;
  subscribed: boolean;
}

export type AuthData = {
  subData?: SubData;
  onboardData?: OnboardingResponses;
  loginData?: LoginData;
}

const AuthContext = createContext<{ auth: AuthData, setAuth:any }>({ auth:{}, setAuth: null });

export const AuthProvider = ({ children }:{ children: ReactNode}) => {
  const [auth, setAuth] = useState<AuthData>({ });

  // debounced and callback wrapped function to update the users subscriptiuon details in the db
  const updateSubscriptionData = useCallback(
    _.debounce(() => {
      if(!auth?.loginData?.user_email || !auth.subData?.email){
        console.log('No emails found. Skipping user data update...')
        return;
      }
      console.log('Updating user data:', auth)

    }, 1000),
    [auth.loginData?.user_email, auth.subData?.email]
  )



  useEffect(() => {
    // if(!auth?.loginData && FLAGS.dev){
    //   setAuth((x:AuthData) => ({
    //     ...x,
    //     loginData
    //     email: 'DevUser95',
    //     user_id: 1,
    //   }))
    // }

    updateSubscriptionData()
  }, [auth])


  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {/* <div className="fixed bottom-0 left-0 max-w-screen ">
        <pre style={{fontSize:'.4rem'}}>{JSON.stringify(auth, null, 2)}</pre>
      </div> */}
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);