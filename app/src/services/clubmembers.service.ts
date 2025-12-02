export interface ClubMember {
    clubmemberid: string;
    userid: string;
    clubid: string;
    clubrole: string;
    createdat: string;
    updatedat: string;
    fullname: string;
  }

  interface ClubMemberAPI {
    clubmember_clubmemberid: string;
    fullname: string;
  }  
  
  export interface ClubMemberFormatted {
    id: string; // Asegurar que proviene de un identificador único
    name: string;
  }  
  
  export async function fetchClubMembers(id : string): Promise<ClubMemberFormatted[]> {
    try {
      const response = await fetch(`http://localhost:3001/clubmembers/club/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch club members");
      }
  
      const members: ClubMemberAPI[] = await response.json(); // ✅ Especificamos el tipo de datos
      console.log(members);
  
      return members
        .map((member) => ({
          id: member.clubmember_clubmemberid,
          name: member.fullname,
        }))
        .sort((a, b) => a.name.localeCompare(b.name)); // ✅ Ordena alfabéticamente por nombre
    } catch (error) {
      console.error("Error fetching club members:", error);
      return []; // ✅ Siempre retorna un array
    }
  }
  
  
  
  