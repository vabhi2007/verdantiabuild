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

const DurationFilter: React.FC = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(doc(db, "selectedFilters", "selected"), (doc) => {
      const data = doc.data();
      if (data) {
        setSelectedFilters(data.durations);
      } else {
        setSelectedFilters([]);
      }
    });

    resetFiltersData();

    return () => unsubscribe();
  }, []);

  const resetFiltersData = async () => {
    const ref = doc(db, "selectedFilters", "selected");
    await updateDoc(ref, { durations: [] });
  }

  const updateDurationFilter = async (duration: string) => {
    const ref = doc(db, "selectedFilters", "selected"); 
    if (selectedFilters.includes(duration)) {
      await updateDoc(ref, { durations: arrayRemove(duration) });
    } else {
      await updateDoc(ref, { durations: arrayUnion(duration) });
    }
  }

  const durations = ['Full Time', 'Part Time', 'Internship'];

  return (
    <div className="absolute right-0 mr-[8vw]">
      <div className='mb-[1vw]' style={{ fontFamily: "Bellota Text", fontSize: '1.5vw' }}>Duration</div>
      <div className="flex md:flex-col md:space-y-4">
        {durations.map(duration => (
          <button
            key={duration}
            className={`shadow-md w-[15vw] h-[5vw] py-2 border rounded self-start ${
              selectedFilters.includes(duration) ? 'bg-button-green' : ''
            }`}
            style={{ fontFamily: "Bellota Text", fontSize: '1.5vw', marginBottom: '1vw' }}
            onClick={() => updateDurationFilter(duration)}
          >
            {duration}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DurationFilter;
