'use client'
import classNames from "classnames";
import { useInView } from "framer-motion";
import React, { useEffect, useRef } from "react"
import { useFeatureStore } from "./store";


type Props = {
    children : React.ReactNode;
    id : string
}
export const FeatureTitle = ({children, id} : Props) => {

    const ref = useRef<HTMLParagraphElement>(null);
    const isInView = useInView(ref, {margin: "-50% 0px -50% 0px"});
    const setInViewFeature = useFeatureStore((state) => state.setInViewFeature);
    const inViewFeature = useFeatureStore((state) => state.inViewFeature);

    useEffect(() => {
        if (isInView) setInViewFeature(id)
        if (!isInView && inViewFeature === id) setInViewFeature(null)
    }, [isInView, id, setInViewFeature, inViewFeature])

    return (
        <p 
            ref={ref} 
            className={classNames(
                "text-[3vw] font-family py-[2vw] transition-colors",
                isInView ? "text-black" : "text-gray-300"
            )} 
            style={{ fontFamily: 'Bellota Text' }}>
            {children}
        </p>
    )
}