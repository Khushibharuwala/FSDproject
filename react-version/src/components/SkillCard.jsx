import { Link } from "react-router-dom";

function SkillCard({ title, description, teacher, city, level, fee }) {
  return (
    <div className="skill-card">
      <h3>{title}</h3>

      <p>{description}</p>

      <p>
        <strong>Teacher:</strong> {teacher}
      </p>

      <p>
        <strong>City:</strong> {city}
      </p>

      <p>
        <strong>Level:</strong> {level}
      </p>

      <p>
        <strong>Fee:</strong> {fee}
      </p>

      <Link to="/login" className="learn">
        Learn Skill
      </Link>
    </div>
  );
}

export default SkillCard;
