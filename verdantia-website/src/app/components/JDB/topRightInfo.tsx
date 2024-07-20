// topRightInfo.tsx
import { db } from '@/app/firebase/config';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/app/firebase/config';
import { useRouter } from 'next/navigation';
import { collection, doc, onSnapshot, updateDoc, arrayUnion, setDoc, getDoc, arrayRemove } from 'firebase/firestore';

interface TopRightInfoProps {
    onAddToList: () => void; // Add a prop to handle adding job to list
    onApply: () => void;
    listButtonText: string;
    applyButtonText: string;
}


const TopRightInfo: React.FC<TopRightInfoProps> = ({ onAddToList, onApply, listButtonText, applyButtonText }) => {
    const [user] = useAuthState(auth);
    const router = useRouter();
    const [showButton, changeShowButton] = useState(false);

    useEffect(() => {
        if (user) {
            const userRef = doc(db, 'users', user.uid);
            const unsubscribe = onSnapshot(userRef, (docSnapshot) => {
                if (docSnapshot.exists()) {
                    const data = docSnapshot.data();
                    if (data.admin != true) {
                        changeShowButton(true)
                    }
                    else {
                        changeShowButton(false);
                    }
                }
            });
        }
        else {
            changeShowButton(true); 
        }
    }, [user, router]);

    return (
        <div className="inline-flex gap-[1vw] items-stretch">
            {showButton && (
            <button 
                className="flex-grow text-[0.75vw] rounded-[0.8vh] border border-[#b2b2b2] shadow-[0_0.3vh_0.3vh_0_rgba(0,0,0,0.25)] bg-opacity-100 bg-[#5b8c69] px-[1.5vw] py-[0.5vh] text-[#FFFFFF]" 
                style={{ fontFamily: 'Montserrat' }}
                onClick={onApply}
            >
                {applyButtonText}
            </button>
            )}

            {showButton && (
            <button 
                className="flex-grow text-[0.75vw] bg-white rounded-[0.8vh] border border-[#b2b2b2] shadow-[0_0.3vh_0.3vh_0_rgba(0,0,0,0.25)] px-[1.5vw] py-[0.5vh]" 
                style={{ fontFamily: 'Montserrat' }}
                onClick={onAddToList} // Call onAddToList prop when button is clicked
            >
                {listButtonText}
            </button>
            )}
            
        </div>
    );
};

export default TopRightInfo;
