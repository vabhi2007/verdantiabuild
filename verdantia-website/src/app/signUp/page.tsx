'use client'

import SignUpPopUp from "@/app/components/signUpPopUp";
import Navbar from "@/app/components/navbar";
export default function SignUp() {
    return(
        <main>
            <Navbar/>
            <div className={"flex justify-center items-center"}>
                <div className={"flex flex-col items-center"}>
                    <SignUpPopUp/>
                </div>

            </div>
        </main>


    )
}