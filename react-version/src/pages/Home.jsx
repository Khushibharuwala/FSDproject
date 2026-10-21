import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";   // we will create this CSS file next

function Home() {
  useEffect(() => {
    // Header animation
    const header = document.querySelector("header");
    if (header) {
      header.style.opacity = "0";
      header.style.transform = "translateY(-50px)";

      setTimeout(() => {
        header.style.transition = "all 1s ease";
        header.style.opacity = "1";
        header.style.transform = "translateY(0)";
      }, 200);
    }

    // Sections animation
    const sections = document.querySelectorAll("section");
    sections.forEach((section, index) => {
      section.style.opacity = "0";
      section.style.transform = "translateY(50px)";

      setTimeout(() => {
        section.style.transition = "all 0.8s ease";
        section.style.opacity = "1";
        section.style.transform = "translateY(0)";
      }, 500 + index * 300);
    });

    // Features list animation
    const features = document.querySelectorAll("#features li");
    features.forEach((feature, index) => {
      feature.style.opacity = "0";
      feature.style.transform = "translateX(-50px)";

      setTimeout(() => {
        feature.style.transition = "all 0.5s ease";
        feature.style.opacity = "1";
        feature.style.transform = "translateX(0)";
      }, 1200 + index * 300);
    });
  }, []);

  const handleGetStarted = (e) => {
    const button = e.target;
    button.innerText = "Let's Start! 🚀";
    button.style.transform = "scale(1.2)";

    setTimeout(() => {
      button.style.transform = "scale(1)";
    }, 300);

    alert("Welcome to Skill Connect! 🎓");
  };

  return (
    <>
      <header>
        <h1>Skill Connect Portal</h1>
        <p>Exchange Skills. Learn Together. Grow Together.</p>

        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/find-skills">Find Skills</Link> |{" "}
          <Link to="#">Teach</Link> |{" "}
          <Link to="/profile">Profile</Link> |{" "}
          <Link to="/login">Login</Link> |{" "}
          <Link to="/register">Register</Link>
        </nav>

        <hr />
      </header>

      <section>
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

        <button id="getStarted" onClick={handleGetStarted}>
          Get Started
        </button>
      </section>

      <hr />

      <section>
        <h2>Our Features</h2>

        <ul id="features">
          <li>Skill Matching</li>
          <li>Chat with Students</li>
          <li>Booking Sessions</li>
          <li>Reviews & Ratings</li>
        </ul>
      </section>

      <hr />

      <section>
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
    </>
  );
}

export default Home;