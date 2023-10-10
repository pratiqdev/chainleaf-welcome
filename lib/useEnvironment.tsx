import { useEffect, useState } from 'react';


function useEnvironment() {
    const [environment, setEnvironment] = useState({
        hasWindow: false,
        hasDocument: false,
        isTouchDevice: false,
        isOnline: false,
        viewportSize: { width: 0, height: 0 },
        supportsCookies: false,
        prefersDarkMode: false,
        supportsGeolocation: false,
        supportsFileApi: false,
        supportsWebGL: false,
        supportsNotifications: false,
        grantedNotifications: false
    });

    useEffect(() => {
        const updateEnvironment = async () => {
            let grantedNoti = typeof navigator === 'object' 
                ? (await navigator?.permissions?.query({ name: 'geolocation' })).state === 'granted'
                    ? true
                    : false
                : false

            setEnvironment({
                hasWindow: typeof window === 'object',
                hasDocument: typeof document === 'object',
                isTouchDevice: 'ontouchstart' in window || navigator.maxTouchPoints > 0,
                isOnline: navigator.onLine,
                viewportSize: {
                    width: window.innerWidth,
                    height: window.innerHeight,
                },
                supportsCookies: navigator.cookieEnabled,
                prefersDarkMode: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches,
                supportsGeolocation: 'geolocation' in navigator,
                supportsFileApi: 'FileReader' in window,
                supportsWebGL: (() => {
                    try {
                        const canvas = document.createElement('canvas');
                        return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
                    } catch (e) {
                        return false;
                    }
                })(),
                supportsNotifications: 'Notification' in window,
                grantedNotifications: grantedNoti   
            });
        };

        updateEnvironment();

        // Optional: Update on specific events like resize, online/offline status change
        window?.addEventListener?.('resize', updateEnvironment);
        window?.addEventListener?.('online', updateEnvironment);
        window?.addEventListener?.('offline', updateEnvironment);

        return () => {
            window?.removeEventListener?.('resize', updateEnvironment);
            window?.removeEventListener?.('online', updateEnvironment);
            window?.removeEventListener?.('offline', updateEnvironment);
        };
    }, []);

    return environment;
}


export default useEnvironment