import React, { useEffect, useState } from 'react';
import {
  collection,
  addDoc,
  getDoc,
  QuerySnapshot,
  query,
  onSnapshot,
  deleteDoc,
  doc, setDoc, updateDoc, arrayUnion, arrayRemove, getDocFromCache,
} from 'firebase/firestore';
import { db } from '@/app/firebase/config';

const RoleFilter: React.FC = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  useEffect(() => {
    const unsubscribe= onSnapshot(doc(db, "selectedFilters", "selected"), (doc) => {
      const data = doc.data();
      if (data) {
        setSelectedFilters(data.roles);
      } else {
        setSelectedFilters([]);
      }
    });

    resetFiltersData();

    return () => unsubscribe();
  }, []);

  const resetFiltersData = async () => {
    const ref = doc(db, "selectedFilters", "selected");
    await updateDoc(ref, { roles: [] });
  }

  const updateRoleFilter = async (role: string) => {
    const ref = doc(db, "selectedFilters", "selected");
    if (selectedFilters.includes(role)) {
      await updateDoc(ref, { roles: arrayRemove(role) });
    } else {
      await updateDoc(ref, { roles: arrayUnion(role) });
    }
  }

  const roles = ['Coordinator', 'Manager', 'Engineer', 'Scientist', 'Analyst'];

  return (
    <div>
      <div className='mb-[1vw]' style={{ fontFamily: "Bellota Text", fontSize: '1.5vw' }}>Role</div>
      <div className="grid grid-cols-2 gap-[0vw]">
        <div>
          {roles.slice(0, 3).map(role => (
            <button
              key={role}
              style={{ fontFamily: "Bellota Text", fontSize: '1.5vw', backgroundColor: selectedFilters.includes(role) ? '#BCD6C0' : 'white' }}
              className={"shadow-md block w-[15vw] h-[5vw] px-4 py-2 border rounded mb-[2vw]"}
              onClick={() => updateRoleFilter(role)}
            >
              {role}
            </button>
          ))}
        </div>
        <div>
          {roles.slice(3).map(role => (
            <button
              key={role}
              style={{ fontFamily: "Bellota Text", fontSize: '1.5vw', backgroundColor: selectedFilters.includes(role) ? '#BCD6C0' : 'white' }}
              className={"shadow-md block w-[15vw] h-[5vw] px-4 py-2 border rounded mb-[2vw]"}
              onClick={() => updateRoleFilter(role)}
            >
              {role}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoleFilter;
