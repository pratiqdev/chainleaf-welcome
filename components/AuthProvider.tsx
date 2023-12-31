"use client"
import {  useSessionStorage } from "@/lib/useStorage";
import { createContext, useState, useContext, ReactNode, useEffect, useCallback } from "react";
import FLAGS from "@/FLAGS";
import axiosInstance from "@/lib/axios";
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
    phone?: string;
    website?: string;
    contactInfo?: string;
  },
  location?: {
    address?: string;
    state?: string;
    zip?: string;
  },
  labRequirements?: {
    certTypes?: string[];
    licenses?: string[];
    acres?: string;
    employees?: string;
    // the percentage of any batch that is sent for testing: 100 lb batch, .01 lb sent for testing (.01% test coverage)
    testCoverage?: string;
    testFrequency?: string;
  },
}

export type SubData = {
  email?: string;
  subscribed: boolean;
}

export type AuthData = {
  userId?: number;
  subData?: SubData;
  onboardData?: OnboardingResponses;
  loginData?: LoginData;
  feedback?: string;
}

const AuthContext = createContext<{ auth: AuthData, setAuth:any }>({ auth:{}, setAuth: null });

export const AuthProvider = ({ children }:{ children: ReactNode}) => {
  const [auth, setAuth] = useState<AuthData>({ });

  // debounced and callback wrapped function to update the users subscriptiuon details in the db
  const updater = useCallback(async () => {
      if(auth.userId){

        const expectedApiData = {
          // user_email: auth.loginData?.user_email ?? auth.subData?.email,
          // subscribe: auth.loginData?.subscribed ?? auth.subData?.subscribed,
          user_subscription_id: auth.userId,
          user_subscription_details: auth
        }

        try{
          const { data, status } = await axiosInstance.post('/chainleaflabs-usersubscriptions/userregistration/chainleaflabs/updateuserdetails', expectedApiData)
          
          if(status === 200){
            console.log('user data updated:', data)
          }else{
            console.log('update failed?', {data, status})
          }

        }catch(err){
          console.log('update error:', err)
        }


      }else{
        console.log('No userId found. Skipping user data update...', auth?.userId)
      }
      
    }, [auth])

  const debouncer =  _.debounce(updater, 5000)



  useEffect(() => {
    debouncer()
  }, [auth, debouncer])


  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {FLAGS.dev && <div className="fixed bottom-0 left-0 max-w-screen ">
        <pre style={{fontSize:'.4rem'}}>{JSON.stringify(auth, null, 2)}</pre>
      </div>}
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);