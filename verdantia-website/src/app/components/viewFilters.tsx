import {collection, getDocs, query} from "firebase/firestore";
import {db} from "@/app/firebase/config";
import {exportAppImpl} from "next/dist/export";

const ViewFilters: React.FC = async () => {
    const q = query(collection(db, "selectedFilters"));
    const querySnapshot = await getDocs(q)

    const printFilters = () => {
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
        })
    }
    return (
        <button onClick={printFilters}></button>
    )
}

export default ViewFilters