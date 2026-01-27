/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useEffect } from 'react';

const DEFAULT_EVENTS = ["mousedown", "touchstart"];


function useClickOutside(callback:(event:any)=>void, events:any, nodes:any) {
  const ref = useRef<HTMLDivElement>(null);
  const eventsList = events || DEFAULT_EVENTS;
  useEffect(() => {
    const listener = (event:any) => {
      const { target } = event ?? {};
      if (Array.isArray(nodes)) {
        const shouldIgnore = !document.body.contains(target) && target?.tagName !== "HTML";
        const shouldTrigger = nodes.every((node) => !!node && !event.composedPath().includes(node));
        if (shouldTrigger && !shouldIgnore) {
          callback(event)
        }
      } else if (ref.current && !ref.current?.contains(target)) {
        callback(event);
      }
    };
    eventsList.forEach((fn:any) => document.addEventListener(fn, listener));
    return () => {
      eventsList.forEach((fn:any) => document.removeEventListener(fn, listener));
    };
  }, [ref, callback, nodes]);
  return ref;
}

export { useClickOutside };
