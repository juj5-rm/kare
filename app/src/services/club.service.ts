export interface Club {
    clubid: string;
    clubname: string;
    clubcategory: string;
    churchid: string;
    districtid: string | null;
  }
  
  export interface ClubFormatted {
    id: string;
    name: string;
  }
  
  export async function fetchClubs(): Promise<ClubFormatted[]> {
    try {
      const response = await fetch("http://localhost:3001/club");
      if (!response.ok) {
        throw new Error("Failed to fetch clubs");
      }
      
      const clubs: Club[] = await response.json();
      return clubs.map(({ clubid, clubname, clubcategory }) => ({
        id: clubid,
        name: `${clubcategory} ${clubname}`,
      }));
    } catch (error) {
      console.error("Error fetching clubs:", error);
      return [];
    }
  }
  