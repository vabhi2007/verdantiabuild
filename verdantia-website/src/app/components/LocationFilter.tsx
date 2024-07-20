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

const LocationFilter: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<string[] | null>(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(doc(db, "selectedFilters", "selected"), (doc) => {
      const data = doc.data();
      if (data && data.locations && data.locations.length > 0) {
        setSelectedLocation(data.locations[0]);
      } else {
        setSelectedLocation(null);
      }
    });

    resetFiltersData();

    return () => unsubscribe();
  }, []);

  const resetFiltersData = async () => {
    const ref = doc(db, "selectedFilters", "selected");
    await updateDoc(ref, { location: [] });
  }

  const updateLocationFilter = async (location: string) => {
    const ref = doc(db, "selectedFilters", "selected");
    await updateDoc(ref, {
      location: location ? [location] : []
    });
  }

  return (
    <div className="w-full mr-8 flex flex-col">
      <div className='mb-[1vw]' style={{fontFamily: "Bellota Text", fontSize: '1.5vw'}}>Location</div>
      <div>
        <select
          className="shadow-md w-full border border-gray-300 rounded p-3 text-[1.5vw]"
          style={{fontFamily: "Bellota Text"}}
          value={selectedLocation}
          onChange={(e) => updateLocationFilter(e.target.value)}
        >
          <option value="">All</option>
          <option value="Seattle, WA">Seattle, WA</option>
          <option value="London, UK">London, UK</option>
          <option value="New York City, NY">New York City, NY</option>
        </select>
      </div>
    </div>
  );
};

export default LocationFilter;
