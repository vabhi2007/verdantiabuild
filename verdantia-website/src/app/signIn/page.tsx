'use client'

import { useState, useEffect } from 'react';
import { signOut } from "@firebase/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";
import { useAuthState } from 'react-firebase-hooks/auth';

import SignInPopUp from "@/app/components/signInPopUp";
import Navbar from "@/app/components/navbar";
export default function SignIn() {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const router = useRouter();
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        if (user) {
          signOut(auth);
        }
    }

    useEffect(() => {
        return () => handleSignOut();
    }, []);

    return (
        <main>
            <Navbar/>
            <div className={"flex justify-center items-center"}>
                <div className={"flex flex-col items-center"}>
                    <SignInPopUp/>
                </div>

            </div>
        </main>
    )
}