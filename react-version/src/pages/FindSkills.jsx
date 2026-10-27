import { useState } from "react";
import { Link } from "react-router-dom";
import SkillCard from "../components/SkillCard";
import { usePageTitle } from "../hooks";
import "./FindSkills.css";

const SKILLS = [
  {
    title: "Python Programming",
    category: "Programming",
    description: "Learn Python programming from basic to advanced level.",
    teacher: "Aarav Sharma",
    city: "Jaipur",
    level: "Beginner",
    fee: "₹299",
  },
  {
    title: "Web Development",
    category: "Web Development",
    description: "Learn HTML, CSS and create beautiful websites.",
    teacher: "Rahul Verma",
    city: "Bengaluru",
    level: "Intermediate",
    fee: "₹499",
  },
  {
    title: "Indian Cooking",
    category: "Cooking",
    description: "Learn traditional Indian recipes and cooking methods.",
    teacher: "Priya Verma",
    city: "Delhi",
    level: "Beginner",
    fee: "₹249",
  },
  {
    title: "Indian Classical Music",
    category: "Music",
    description: "Learn the basics of Indian classical music.",
    teacher: "Ananya Verma",
    city: "Mumbai",
    level: "Beginner",
    fee: "₹399",
  },
];

const CATEGORIES = ["Programming", "Web Development", "Cooking", "Music", "Languages"];
const CITIES = ["Jaipur", "Delhi", "Mumbai", "Bengaluru", "Pune"];

function FindSkills() {
  usePageTitle("SkillConnect - Find Skills");

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [city, setCity] = useState("");
  // filters are applied when "Search" is pressed
  const [applied, setApplied] = useState({ query: "", category: "", city: "" });

  const handleSearch = (e) => {
    e.preventDefault();
    setApplied({ query: query.trim().toLowerCase(), category, city });
  };

  const visible = SKILLS.filter(
    (s) =>
      (!applied.query ||
        `${s.title} ${s.description} ${s.teacher}`
          .toLowerCase()
          .includes(applied.query)) &&
      (!applied.category || s.category === applied.category) &&
      (!applied.city || s.city === applied.city)
  );

  return (
    <div className="find-page">
      <header>
        <h1>SkillConnect</h1>
        <p>Connect, Learn and Share Skills</p>
      </header>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/find-skills">Find Skills</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>

      <main>
        <h2>Find Skills</h2>

        <div className="search-box">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search for a skill"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />

            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="">Select Category</option>
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>

            <select value={city} onChange={(e) => setCity(e.target.value)}>
              <option value="">Select City</option>
              {CITIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>

            <input type="submit" value="Search" />
          </form>
        </div>

        <div className="skills">
          {visible.map((skill) => (
            <SkillCard key={skill.title} {...skill} />
          ))}
        </div>
      </main>

      <footer>
        <p>© 2026 SkillConnect</p>
      </footer>
    </div>
  );
}

export default FindSkills;
