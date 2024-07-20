import React, { useEffect, useState } from 'react';
import { doc, updateDoc, arrayUnion, arrayRemove, onSnapshot } from 'firebase/firestore';
import { db } from '@/app/firebase/config';

const PlaceFilter: React.FC = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(doc(db, "selectedFilters", "selected"), (doc) => {
      const data = doc.data();
      if (data) {
        setSelectedFilters(data.places);
      } else {
        setSelectedFilters([]);
      }
    });

    resetFiltersData();

    return () => unsubscribe();
  }, []);

  const resetFiltersData = async () => {
    const ref = doc(db, "selectedFilters", "selected");
    await updateDoc(ref, { places: [] });
  }

  const updatePlaceFilter = async (place: string) => {
    const ref = doc(db, "selectedFilters", "selected");
    if (selectedFilters.includes(place)) {
      await updateDoc(ref, { places: arrayRemove(place) });
    } else {
      await updateDoc(ref, { places: arrayUnion(place) });
    }
  }

  return (
    <div className="flex justify-center mt-4 gap-10 flex-grow">
      <button
        style={{fontFamily: "Bellota Text", fontSize: '1.5vw', width: '100%'}}
        className={`shadow-md h-[4vw] px-4 py-2 border rounded ${selectedFilters.includes('In Person') ? 'bg-button-green' : ''}`}
        onClick={() => updatePlaceFilter('In Person')}
      >
        In Person
      </button>
      <button
        style={{fontFamily: "Bellota Text", fontSize: '1.5vw', width: '100%'}}
        className={`shadow-md h-[4vw] px-4 py-2 border rounded ${selectedFilters.includes('Hybrid') ? 'bg-button-green' : ''}`}
        onClick={() => updatePlaceFilter('Hybrid')}
      >
        Hybrid
      </button>
      <button
        style={{fontFamily: "Bellota Text", fontSize: '1.5vw', width: '100%'}}
        className={`shadow-md h-[4vw] px-4 py-2 border rounded ${selectedFilters.includes('Remote') ? 'bg-button-green' : ''}`}
        onClick={() => updatePlaceFilter('Remote')}
      >
        Remote
      </button>
    </div>
  );
};

export default PlaceFilter;
