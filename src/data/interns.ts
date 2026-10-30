export interface TeamInfo {
  color: string;
  members: string[];
}

export const internData = {
  personalTeam: {
    "Wing": { color: "bg-emerald-800 text-white", members: ["Wendy", "Luna", "Fanny", "Peter", "Leon"] },
    "Toby": { color: "bg-amber-600 text-white", members: ["Jennifer", "Elaine", "Cya", "Quanna", "Daisy"] },
    "Ka Ho": { color: "bg-sky-800 text-white", members: ["Freda", "Erin", "Dobby", "Carol", "Yomi"] }
  } as Record<string, TeamInfo>,
  
  sideProjectTeam: {
    "萬事屋": ["Jennifer", "Daisy", "Freda", "Wendy", "Yomi"],
    "共學系列": ["Jennifer", "Daisy", "Freda", "Erin", "Peter", "Cya", "Leon", "Carol", "Yomi"],
    "快樂營": ["Cya", "Quanna", "Erin", "Daisy", "Yomi"],
    "共享客廳": ["Erin", "Elaine", "Dobby", "Quanna", "Carol", "Yomi", "Wendy", "Fanny", "Jennifer", "Leon", "Daisy"],
    "Social Media": ["Freda", "Elaine", "Quanna", "Daisy", "Cya", "Leon", "Wendy"],
    "網站": ["Fanny", "Erin", "Wendy", "Freda"],
    "100人生存意義": ["Wendy", "Luna", "Fanny", "Peter", "Leon"]
  } as Record<string, string[]>
};