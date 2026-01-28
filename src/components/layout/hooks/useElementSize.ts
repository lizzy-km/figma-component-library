/* eslint-disable @typescript-eslint/no-explicit-any */


import { useState, useCallback, useEffect } from 'react';

function useWindowEvent(type: keyof WindowEventMap, listener: () => void, options: any) {
  useEffect(() => {
    window.addEventListener(type, listener, options);
    return () => window.removeEventListener(type, listener, options);
  }, [type, listener]);
}


export { useWindowEvent };


const eventListerOptions = {
  passive: true
};


 function useViewportSize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0
  });
  const setSize = useCallback(() => {
    setWindowSize({ width: window.innerWidth || 0, height: window.innerHeight || 0 });
  }, []);
  useWindowEvent("resize", setSize, eventListerOptions);
  useWindowEvent("orientationchange", setSize, eventListerOptions);
  useEffect(setSize, []);
  return windowSize;
}

export  {useViewportSize}