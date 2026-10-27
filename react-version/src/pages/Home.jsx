import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { usePageTitle } from "../hooks";
import "./Home.css";

const FEATURES = [
  "Skill Matching",
  "Chat with Students",
  "Booking Sessions",
  "Reviews & Ratings",
];

function Home() {
  usePageTitle("Skill Connect Portal");

  const [showHeader, setShowHeader] = useState(false);
  const [shownSections, setShownSections] = useState(0);
  const [shownFeatures, setShownFeatures] = useState(0);
  const [started, setStarted] = useState(false);
  const [pop, setPop] = useState(false);

  // Entrance animations (same timings as the original script.js)
  useEffect(() => {
    const timers = [];
    timers.push(setTimeout(() => setShowHeader(true), 200));
    for (let i = 0; i < 3; i++) {
      timers.push(setTimeout(() => setShownSections(i + 1), 500 + i * 300));
    }
    for (let i = 0; i < FEATURES.length; i++) {
      timers.push(setTimeout(() => setShownFeatures(i + 1), 1200 + i * 300));
    }
    return () => timers.forEach(clearTimeout);
  }, []);

  const handleGetStarted = () => {
    setStarted(true);
    setPop(true);
    setTimeout(() => setPop(false), 300);
    alert("Welcome to Skill Connect! 🎓");
  };

  const sectionClass = (i) => `fade-up${shownSections > i ? " show" : ""}`;

  return (
    <div className="home-page">
      <header className={`fade-down${showHeader ? " show" : ""}`}>
        <h1>Skill Connect Portal</h1>
        <p>Exchange Skills. Learn Together. Grow Together.</p>

        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/find-skills">Find Skills</Link> |{" "}
          <a href="#">Teach</a> |{" "}
          <Link to="/profile">Profile</Link> |{" "}
          <Link to="/login">Login</Link> |{" "}
          <Link to="/register">Register</Link>
        </nav>

        <hr />
      </header>

      <section className={sectionClass(0)}>
        <h2>Learn New Skills by Exchanging Your Own</h2>

        <p>
          Skill Connect is a platform where students can exchange their skills
          with each other.
        </p>

        <h3>Example</h3>

        <p>
          I teach <strong>React</strong>.
        </p>
        <p>
          I want to learn <strong>Python</strong>.
        </p>

        <button
          id="getStarted"
          className={pop ? "pop" : ""}
          onClick={handleGetStarted}
        >
          {started ? "Let's Start! 🚀" : "Get Started"}
        </button>
      </section>

      <hr />

      <section className={sectionClass(1)}>
        <h2>Our Features</h2>

        <ul id="features">
          {FEATURES.map((f, i) => (
            <li key={f} className={shownFeatures > i ? "show" : ""}>
              {f}
            </li>
          ))}
        </ul>
      </section>

      <hr />

      <section className={sectionClass(2)}>
        <h2>How It Works</h2>

        <ol>
          <li>Create your profile.</li>
          <li>Add the skills you can teach.</li>
          <li>Select the skills you want to learn.</li>
          <li>Get matched with another student.</li>
          <li>Chat, book sessions, and leave reviews.</li>
        </ol>
      </section>

      <hr />

      <footer>
        <p>&copy; 2026 Skill Connect. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
