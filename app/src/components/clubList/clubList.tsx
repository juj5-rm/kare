import { useEffect, useState } from "react";
import { fetchClubs, ClubFormatted } from "@/services/club.service";

export default function ClubList() {
    const [clubs, setClubs] = useState<ClubFormatted[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        async function loadClubs() {
            const data = await fetchClubs();
            setClubs(data);
            setLoading(false);
        }
        loadClubs();
    }, []);

    if (loading) return <p>Loading clubs...</p>;

    return (
        <div>
            <div className="w-full border-b-2 border-sigca-bordes mt-[3vh]">
                {clubs.map((club, index) => (
                    <div key={club.id} className="w-full flex text-[1.5vw] py-4 px-6 font-roboto">
                        <p className="font-extrabold font-roboto text-sigca-contraste text-[1.5vw] mr-4">{index + 1}</p>
                        <div>{club.name}</div>
                    </div>
                ))}
            </div>
            <p>Total clubs: {clubs.length}</p>
        </div>
    );
}
