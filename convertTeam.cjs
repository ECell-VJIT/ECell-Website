const fs = require("fs");
const csv = require("csv-parser");

const inputFile = "team.csv";
const outputFile = "team.json";

const result = {
  core: [
    { id: "core-1", name: "Tania Viquar", role: "President", team: "core", branch: "", year: "", roll_number: "", image: "", socials: { github: "", linkedin: "", instagram: "" }, tagline: "" },
    { id: "core-2", name: "Kashyap Devulapalli", role: "Vice-President", team: "core", branch: "", year: "", roll_number: "", image: "", socials: { github: "", linkedin: "", instagram: "" }, tagline: "" },
    { id: "core-3", name: "Sai Srujan Punati", role: "Technical Lead", team: "tech", branch: "", year: "", roll_number: "", image: "", socials: { github: "", linkedin: "", instagram: "" }, tagline: "" },
    { id: "core-4", name: "Syed Iliyaz", role: "Digital Media Lead", team: "digital", branch: "", year: "", roll_number: "", image: "", socials: { github: "", linkedin: "", instagram: "" }, tagline: "" },
    { id: "core-5", name: "Shashank Madishetty", role: "Creative Lead", team: "creative", branch: "", year: "", roll_number: "", image: "", socials: { github: "", linkedin: "", instagram: "" }, tagline: "" },
    { id: "core-6", name: "Tanvi Gorge", role: "Head of Documentation & HR", team: "documentation", branch: "", year: "", roll_number: "", image: "", socials: { github: "", linkedin: "", instagram: "" }, tagline: "" },
    { id: "core-7", name: "Sameera Shaik", role: "Head of Marketing", team: "marketing", branch: "", year: "", roll_number: "", image: "", socials: { github: "", linkedin: "", instagram: "" }, tagline: "" },
    { id: "core-8", name: "Aldrin Paul", role: "Head of Event Management", team: "event_management", branch: "", year: "", roll_number: "", image: "", socials: { github: "", linkedin: "", instagram: "" }, tagline: "" }
  ],
  teams: {
    tech: [],
    digital: [],
    creative: [],
    documentation: [],
    marketing: [],
    event_management: []
  }
};

// ---------- HELPERS ----------

// Generate slug ID
function generateId(name) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

// Normalize team names
function normalizeTeam(team) {
  if (!team) return null;

  const t = team.toLowerCase();

  if (t.includes("tech")) return "tech";
  if (t.includes("digital")) return "digital";
  if (t.includes("creative") || t.includes("design")) return "creative";
  if (t.includes("document") || t.includes("hr")) return "documentation";
  if (t.includes("market")) return "marketing";
  if (t.includes("event")) return "event_management";

  return null;
}

// Clean role names (public display)
function getRole(teamRaw) {
  if (!teamRaw) return "Team Member";

  const t = teamRaw.toLowerCase();

  if (t.includes("tech")) return "Tech Team Member";
  if (t.includes("digital")) return "Digital Team Member";
  if (t.includes("creative") || t.includes("design")) return "Creative Team Member";
  if (t.includes("document") || t.includes("hr")) return "HR & Documentation Team Member";
  if (t.includes("market")) return "Marketing Team Member";
  if (t.includes("event")) return "Event Management Team Member";

  return "Team Member";
}

// Normalize year format
function normalizeYear(year) {
  if (!year) return "";
  return year.replace(/(st|nd|rd|th)/g, "") + " Year";
}

// Default tagline
function getTagline(tagline) {
  if (tagline && tagline.trim() !== "") return tagline;
  return "Part of E-Cell VJIT 🚀";
}

// ---------- CSV PARSING ----------

fs.createReadStream(inputFile)
  .pipe(csv())
  .on("data", (row) => {
    const name = row["Full Name"]?.trim();
    if (!name) return;

    const teamRaw = row["Team in E-Cell"];
    const team = normalizeTeam(teamRaw);

    if (!team) return; // skip unknown teams

    const member = {
      id: generateId(name),
      name: name,
      role: getRole(teamRaw),
      team: team,

      branch: row["Branch"] || "",
      year: normalizeYear(row["Year of Study"]),
      roll_number: row["Roll Number"] || "",

      image: "", // fill after Cloudinary upload

      socials: {
        github: row["GitHub Profile Link (Optional)"] || "",
        linkedin: row["LinkedIn Profile Link (Optional)"] || "",
        instagram: row["Instagram Profile Link (Optional)"] || ""
      },

      tagline: getTagline(
        row["Tagline to be featured under your name (if not given , random tagline will be used)"]
      )
    };

    result.teams[team].push(member);
  })
  .on("end", () => {
    fs.writeFileSync(outputFile, JSON.stringify(result, null, 2));
    console.log("✅ team.json generated successfully (clean + production-ready)");
  });