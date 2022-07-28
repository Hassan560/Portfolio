//framer motion
import { useAnimation } from "framer-motion";

import { useInView } from 'react-intersection-observer';


export const useScroll = () => {
    const controls = useAnimation()
    const [element, view] = useInView({ threshold: 0.3 })
    if (view) {
        controls.start("visible");
    } else {
        controls.start("hidden");
    }
    return [element, controls];
}
