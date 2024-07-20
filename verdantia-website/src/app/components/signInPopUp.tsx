'use client'

//components/signInPopUp.tsx

import {useState} from 'react'
import {useSignInWithEmailAndPassword} from 'react-firebase-hooks/auth'
import {auth, db} from '@/app/firebase/config'
import JobPostForm from "@/app/components/jopPostForm";
import signInImage from "./signInImage.png"

import {useRouter} from "next/navigation";
import {addDoc, collection, doc, setDoc} from "firebase/firestore";

const SignInPopUp: React.FC = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
    const router = useRouter();
    const handleSignIn = async () => {
        try {
            // @ts-ignore
            const res = await signInWithEmailAndPassword(email, password)
            console.log(res)
            setEmail('')
            setPassword('')
            router.push('/portal')
        } catch (error) {
            console.error(error)
        }
    }

    const redirectToSignUp = () => {
        router.push('/signUp')
    }

    // @ts-ignore
    return (
        <main className={"flex justify-center items-center"}>
        <div className="flex  items-center relative bg-white h-1/2 justify-self-center w-3/4 m-[0.5vw]">
            <div
                className="overflow-hidden rounded-[1vw] flex items-center border border-solid border-[#b2b2b2] shadow-[0px_4px_4px_#00000040]">
                <div className="flex flex-col items-center justify-center px-[4vw]   gap-[1.5vw] w-full">
                    <div className="inline-flex flex-col items-center relative flex-[0_0_auto]">
                        <div
                            className="relative w-fit [font-family:'Bellota_Text',Helvetica] font-bold text-[#3e3e3e] text-[2.2vw] ">
                            Welcome Back
                        </div>
                        <div className="inline-flex flex-col items-start gap-[10px] relative flex-[0_0_auto]">
                            <p className="relative w-fit [font-family:'Bellota_Text',Helvetica] font-bold text-neutral-500 text-[1.2vw]">
                                Please enter your details to sign in.
                            </p>
                        </div>
                    </div>
                    <div
                        className="flex flex-col items-start justify-center gap-[1vw] relative self-stretch w-full flex-[0_0_auto]">
                        <div className="flex flex-col items-center gap-[1vw] w-full">
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full h-fit p-[0.8vw] rounded-[0.5vw] border-[0.106vw] border-solid border-gray-400 font-normal text-gray-700 text-[1.1vw] whitespace-nowrap"
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="rounded-[0.5vw] w-full h-fit p-[0.8vw] border-[0.106vw] border-solid border-gray-400 font-normal text-gray-700 text-[1.1vw] whitespace-nowrap"
                            />
                        </div>
                        <div className="flex flex-col items-center justify-center gap-4vw w-full">
                            <button onClick={handleSignIn}
                                    className="flex items-center justify-center gap-10 py-[1vw] w-full bg-[#53975d] rounded-[0.5vw] overflow-hidden">
                                <div className="text-white text-[1.3vw] leading-27.6">
                                    Sign In
                                </div>
                            </button>
                            <p className="relative w-fit [font-family:'Inter-Regular',Helvetica] font-normal text-transparent text-[1vw] mt-[0.25vw] whitespace-nowrap">
                                <span className="text-neutral-500">Don’t have an account?</span>
                                <span className="text-black">&nbsp;</span>
                                <span>
                                    <button onClick={redirectToSignUp} className="text-[#3e3e3e] underline">Create account</button>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <img className="relative w-1/2" alt="signInImage" src={signInImage.src}/>

            </div>

        </div>

        </main>
    );
};


export default SignInPopUp;