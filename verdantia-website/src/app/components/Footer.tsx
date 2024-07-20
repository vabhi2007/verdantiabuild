'use client'

import React from "react";
import { useRouter } from "next/navigation";
import facebook from "../../../public/images/facebook.png"
import instagram from "../../../public/images/instagram.png"
import youtube from "../../../public/images/youtube.png"
import twitter from "../../../public/images/twitter.png"
import github from "../../../public/images/github.png"


const sections = [
    {
        title:"Members",
        items : ["Aakarsh Balla", "Abhinav Vallabhaneni", "Sacchin Saravanan"]
    },
    {
        title:"Citations",
        items : ["Links"]
    },
    {
        title:"GitHub",
        items : ["Repository"]
    },
    {
        title:"FBLA 2024",
        items : ["Website Coding & Development"]
    }
]

const Footer = () =>{
    const router = useRouter();

    const handleItemClick = (item: string) => {
        if (item === "Links") {
            router.push("/citations");
        }
        if (item === "Repository") {
            router.push("https://github.com/SacchinS/Verdantia-Website-State");
        }
    };

    return (
        <div className="w-full mt-24 bg-neutral-800 text-white py-y px-2 justify-center items-center">
            <div className="mx-auto grid grid-cols-2 md:grid-cols-4 border-b-2 border-white-600 p-8">
                {
                    sections.map((section, index) => (
                        <div key={index}>
                            <h6 className="text-white font-bold uppercase pt-2">
                                {section.title}
                            </h6>
                            <ul>
                                {section.items.map((item, i) => (
                                    <li key = {i} className="py-1 text-white hover:text-white cursor-pointer" onClick={() => handleItemClick(item)}>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))
                }
            </div> 

            <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-7 justify-between sm:flex-row text-center text-white">
                <p className="py-4">
                    © 2024 Verdantia
                </p>
            </div>
        </div>
    )
}

export default Footer