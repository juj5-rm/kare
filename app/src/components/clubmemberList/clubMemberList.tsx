import { useEffect, useState } from "react";
import { fetchClubMembers, ClubMemberFormatted } from "@/services/clubmembers.service";

interface ClubMembersProps {
    id: string;
}

export function ClubMembers({ id }: ClubMembersProps) {
    const [clubMembers, setClubMembers] = useState<ClubMemberFormatted[]>([]);

    useEffect(() => {
        async function fetchData() {
            const members = await fetchClubMembers(id);
            setClubMembers(members);
        }
        fetchData();
    }, [id]); // Dependencia añadida para reaccionar a cambios en `id`

    return (
        <div>
            <div className="w-full border-b-2 border-sigca-bordes mt-[3vh]">
                {clubMembers.length > 0 ? (
                    clubMembers.map((member, index) => (
                        <div key={member.id} className="w-full flex text-[1.5vw] py-4 px-6 font-roboto">
                            <p className="font-extrabold font-roboto text-sigca-contraste text-[1.5vw] mr-4">{index + 1}</p>
                            <div>{member.name}</div>
                        </div>
                    ))
                ) : (
                    <div className="w-full flex text-[1.5vw] py-4 px-6 font-roboto items-center justify-center">
                        No hay miembros disponibles.
                    </div>
                )}
            </div>
        </div>
    );
}
