"use client"

import { useState, useEffect } from "react";

const useHash = () => {
    const [hash, setHash] = useState('');

    useEffect(() => {
        const handleHashChange = () => {
          setHash(typeof window !== 'undefined' ? window?.location?.hash ?? '' : '');
        };
    
        window.addEventListener('hashchange', handleHashChange);
    
        return () => {
          window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    return hash
}

export default useHash;