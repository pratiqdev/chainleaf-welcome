"use client"

import { useState, useEffect } from "react";

const useHash = () => {
    const [hash, setHash] = useState(window?.location?.hash ?? '#home');

    useEffect(() => {
        const handleHashChange = () => {
          setHash(window?.location?.hash ?? '');
          // Perform any actions based on the hash parameter
        };
    
        window.addEventListener('hashchange', handleHashChange);
    
        return () => {
          window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    return hash
}

export default useHash;