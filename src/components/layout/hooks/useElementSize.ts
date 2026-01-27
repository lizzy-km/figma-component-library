import { useLayoutEffect, useRef, useState } from "react";

export default function useElementSize<T extends HTMLElement>() {
    const ref = useRef<T | null>(null);
    const [size, setSize] = useState({ width: 0, height: 0 });

    useLayoutEffect(() => {
        if (!ref.current) return;

        const el = ref.current;
        const update = () =>
            setSize({ width: el.clientWidth, height: el.clientHeight });

        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    return [ref, size] as const;
}

// interface SizeMapProps {
//     width:number,
//     height:number
// }


export class WindowSize {

      size = { width: 0, height: 0 };


    constructor() {
    if (typeof window === "undefined") return;

    this.resizeWindow = this.resizeWindow.bind(this);

    this.resizeWindow();
    window.addEventListener("resize", this.resizeWindow);

    this.update = this.update.bind(this)
  }


     resizeWindow() {
    this.size = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    // this.update();
  }

  update() { 
    return [this.size] 
   }

  destroy() {
    window.removeEventListener("resize", this.resizeWindow);
  } 
}


export const useWindowSize = new WindowSize